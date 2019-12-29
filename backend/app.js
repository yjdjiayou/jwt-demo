const express = require('express');
const {PORT} = require('./config');
const morgan = require('morgan');
//跨域资源共享
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const methods = require('./wares/methods');

const app = express();

// 跨域插件
app.use(cors());
// 写日志的中间件，每当接收到客户端的请求后，会向控制台打印日志
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methods());
// 如果访问根路径的话交由 indexRouter 处理
app.use('/', indexRouter);
// 如果访问的是 /users 路径的话交由 usersRouter 处理
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.listen(PORT, () => console.log(`服务已经在${PORT}上启动`));
