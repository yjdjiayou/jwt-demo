const express = require('express');
const User = require('../models/user');
const jwt = require('../utils/jwt');
const router = express.Router();

// 用户注册，当用户以 POST 方式向服务器提交 /users/signup 请求的时候
router.post('/signup', async (req, res) => {
    let user = new User(req.body);
    try {
        await user.save();
        res.success({username: user.username});
    } catch (error) {
        res.error(error);
    }
});

router.post('/signin', async (req, res) => {
    let user = req.body;
    try {
        let doc = await User.findOne({username: user.username},(err,doc)=>{
            console.log('err=>',err);
            console.log('doc=>',doc);
        });
        if (doc && doc.comparePassword(user.password)) {
            let jwtToken = jwt.sign({id: doc._id, username: doc.username, admin: doc.admin});
            res.success({jwtToken});
        } else {
            res.error('用户名或密码错误!');
        }
    } catch (error) {
        res.error(error);
    }
});

module.exports = router;