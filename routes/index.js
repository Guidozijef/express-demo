var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 获取用户信息
router.get("/get_user", userController.getAllUser);

// 新增用户
router.post("/add_user", userController.addUser);

// 修改用户
router.post("/update_user", userController.updateUser);

// 修改用户
router.get("/delete_user", userController.deleteUser);

module.exports = router;
