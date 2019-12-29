const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');

function sign(payload) {
    return jwt.sign(payload, SECRET, {
        expiresIn: 600 //单位是秒
    });
}

// mustAdmin 是否必须是管理员才能访问
let verify = (mustAdmin) => (req, res, next) => {
    // 取得客户端发过来的 token
    let jwtToken = req.headers.authorization;
    if (jwtToken) {
        jwt.verify(jwtToken, SECRET, (err, payload) => {
            //1. token 验证失败
            //2. 验证成功但是 token 过期了
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    res.status(401).error('token已经过期');
                } else {
                    res.status(401).error('token是无效的');
                }
            } else {
                // 如果说要求必须管理员才能继续，那么还要看此登录的用户是不是管理员
                if (mustAdmin) {
                    let {admin} = payload;
                    if (admin) {
                        next();
                    } else {
                        res.status(401).error('你不是管理员!无权执行此操作!');
                    }
                } else {
                    next();
                }
            }
        })
    } else {
        res.status(401).error('请提供jwtToken');
    }
};

module.exports = {
    sign,
    verify
};