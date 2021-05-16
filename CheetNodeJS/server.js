//import http = require('http');
//var port = process.env.port || 1337
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
//------------------------------
//  �T�[�o�[�N������
//------------------------------
const express = require('express');
const app = express();
const port = process.env.port || 1337;
const path = require('path');
let server = app.listen(port, function () {
    console.log('Node.js Start');
});
//------------------------------
// API
//------------------------------
let html_or_api = true;
//req��http���N�G�X�g��\���I�u�W�F�N�g
//res��http���X�|���X���\�����邽�߂̃I�u�W�F�N�g
//next�́�https://qiita.com/syumiwohossu/items/f9ee317f31adc3ad387b
//HTML
//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/index.html');
//});
// �ÓI�t�@�C���̃��[�e�B���O
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, 'Page')));
//WebAPI
app.get('/api/', function (req, res) {
    res.send('Hello World!');
});
app.put('/api/', function (req, res) {
    res.send('Hello World!');
});
app.put('/api/', function (req, res) {
    res.send('Hello World!');
});
app.delete('/api/', function (req, res) {
    res.send('Hello World!');
});
// ���̑��̃��N�G�X�g�ɑ΂���404�G���[
app.use((req, res) => {
    res.sendStatus(404);
});
//# sourceMappingURL=server.js.map