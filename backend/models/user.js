const mongoose = require('mongoose');
let connection = require('./index');
const bcrypt = require('bcryptjs');

let define = {
    // 保存文档的时候要检查此用户名是否唯一
    username: {type: String, unique: true},
    password: String,
    // 如果 admin 为 true 表示是管理员，如果为 false 则不是管理员
    admin: {type: Boolean, default: false}
};

// Scheme 没有操作数据库的能力
let UserSchema = new mongoose.Schema(define, {timestamps: true});

// 这种机制也类似于 express 中的中间件
// 在保存之前执行一个函数
UserSchema.pre('save', function (next) {
    // 第一步先生成盐值
    bcrypt.genSalt((err, salt) => {
        // 通过原始的密码和盐值计算哈希值
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            next();
        })
    });
});

// 通过给 methods 增加属性可以给实例扩展方法，让实例直接调用即可
UserSchema.methods.comparePassword = function (passowrd) {
    return bcrypt.compareSync(passowrd, this.password);
};

let User = connection.model("User", UserSchema);

/**
 * 新增
 */
/**
 * 方法一：
 */
// User.create({ username: 'abc', password: 'abc',admin:true}, (err, doc) => {
//     console.log(err);
//     console.log(doc);
// });

// _id 是 mongodb 帮我们生成的一个主键，不会重复，可以用来标识每一个文档
// __v 是内部使用，用来加锁解决并发问题

/**
 * 方法二：
 */
// let user1 = new User({ username: 'abc', password: 'abc'});
// console.log(user1);
// 调用 save 方法可以把自己保存到数据库里
// user1.save((err, doc) => {
//     console.log(err);
//     console.log(doc);
// });

/**
 * 删除
 */
// 第一个参数是删除的条件
//  User.remove({ username: 'abc' }, (err, result) => {
//     console.log(result);
//     // { ok: 1, n: 1 }  ok=1 表示操作成功 n=1 表示删除的条数
//     // 更新的话只会更新匹配记录的第一条，删除的默认会删除所有的记录
// });

User.find({},function(err,doc){
    doc.forEach((item)=>{
        console.log(item.username);
    });
});

module.exports = User;