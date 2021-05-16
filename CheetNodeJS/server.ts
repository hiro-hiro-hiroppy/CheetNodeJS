//import http = require('http');
//var port = process.env.port || 1337
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

//------------------------------
//  サーバー起動処理
//------------------------------
const express = require('express');
const app = express();
const port = process.env.port || 1337;
const path = require('path');

let server = app.listen(port, function () {

    console.log('Node.js Start');
})

//------------------------------
// API
//------------------------------

//reqはhttpリクエストを表すオブジェクト
//resはhttpレスポンスを構成するためのオブジェクト
//nextは→https://qiita.com/syumiwohossu/items/f9ee317f31adc3ad387b

//HTML
// 静的ファイルのルーティング
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

// その他のリクエストに対する404エラー
app.use((req, res) => {
    res.sendStatus(404);
});
