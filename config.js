/**
 * 数据库配置文件
 */

// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://0.0.0.0:27017/blogdb',{useNewUrlParser:true});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

/************** 定义模式Schema **************/
const blogSchema = mongoose.Schema({
    title : {
    	type: String,
        require: true,
    },
    time :{
    	type: Date,
    	require: true,
    },
    cover : {
    	type: String,
    },
    desc : {
    	type: String,
    },
    content : {
    	type: String,
        require: true,
    }
});

/************** 定义模型Model **************/
const Models = {
    Blog : mongoose.model('Blog',blogSchema)
}

module.exports = Models;