const express = require('express');
const Article = require('../models/article');
const jwt = require('../utils/jwt');
const router = express.Router();

// /aritcles/list 查看文章列表
router.get('/list', jwt.verify(), async (req, res) => {
    try {
        let articles = await Artcle.find();
        res.success(articles);
    } catch (error) {
        res.error(error);
    }
});

// /aritcles/add 增加一个新的文章
router.post('/add', jwt.verify(true), async (req, res) => {
    let article = new Article(req.body);
    try {
        await article.save();
        res.success(article);
    } catch (error) {
        res.error(error);
    }
});

module.exports = router;