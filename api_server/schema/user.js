//导入定义验证规则的包
const joi = require('joi')
//定义用户名和密码的验证规则

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const username = joi.string().alphanum().min(4).max(10).required()
// 密码的验证规则
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

//定义id,nickname,email的验证规则
const id=joi.number().integer().min(1).required()
const nickname=joi.string().required()
const email=joi.string().email().required()

//定义验证avatar头像的验证规则
const avatar = joi.string().dataUri().required()
// 定义注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 表示需要对 req.body 中的数据进行验证
  body: {
    username,
    password,
  },
}

//验证规则对象 - 更新用户基本信息
exports.update_userinfo_schema={
  //需要对req.body里面的数据进行验证
  body:{
    id,
    nickname,
    email
  },
}

//验证规则对象-更新密码
exports.update_password_schema = {
  body: {
    // 使用 password 这个规则，验证 req.body.oldPwd 的值
    oldPwd: password,
    // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
    newPwd: joi.not(joi.ref('oldPwd')).concat(password),
  },
}

//验证规则对象-更换头像
exports.update_avatar_schema = {
  body: {
    avatar,
  },
}