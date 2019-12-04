/**
 * 入口文件
 */
const api = require('./api');       // 引入编写好的api
const fs = require('fs');           // 引入文件模块 
const path = require('path');       // 引入处理路径的模块
const bodyParser = require('body-parser');// 引入处理post数据的模块
const express = require('express'); // 引入Express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);

app.use(express.static(path.resolve(__dirname, '../blog-vue')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../blog-vue/index.html'), 'utf-8')
    res.send(html)
})

app.listen(8080);

console.log('Listen success! The port is 8080.');