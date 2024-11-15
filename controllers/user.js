// 引用用户模版数据
const User = require("../models/user.js");

const userController = {
  // getAllUser 获取用户数据并返回到页面
  getAllUser: async function (req, res, next) {
    try {
      let userData = await User.all();
      res.json({
        code: 200,
        message: "操作成功",
        data: userData,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
  // 新增用户
  addUser: async function (req, res, next) {
    try {
      let data = await User.insert(req.body);
      res.json({
        code: 200,
        message: "添加成功",
        data: data,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
  // 修改用户
  updateUser: async function (req, res, next) {
    try {
      let data = await User.update(req.body.id, req.body);
      res.json({
        code: 200,
        message: "修改成功",
        data,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
  // 删除用户
  deleteUser: async function (req, res, next) {
    try {
      let data = await User.delete(Number(req.query.id));
      res.json({
        code: 200,
        message: "删除成功",
        data,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
};

module.exports = userController;
