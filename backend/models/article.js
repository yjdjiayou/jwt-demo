const mongoose = require('mongoose');
let connection = require('./index');
let define = {
    title: {type: String, required: true},
    content: String
};
let ArticleSchema = new mongoose.Schema(define, {timestamps: true});
// 增加文章和查看文章列表
// 查看文章必须登录后才能看 增加文章必须管理员才能增加
let Article = connection.model("Article", ArticleSchema);
module.exports = Article;