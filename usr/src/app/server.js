const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 5656 });

server.on('connection', socket => {
    console.log('Новое подключение!');

    socket.on('message', (message) => {
        console.log(`Получено сообщение: ${message}`);
        // Обработай сообщение здесь
    });

    socket.on('close', () => {
        console.log('Соединение закрыто');
    });
});