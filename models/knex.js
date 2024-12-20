// 引用配置文件
const configs = require("../config");
// 把配置文件中的信息，设置在初始化配置中
module.exports = require("knex")({
  client: "mysql2",
  connection: {
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.user,
    password: configs.mysql.password,
    database: configs.mysql.database,
  },
  // 打印错误
  log: {
    error(message) {
      console.log("[knex error]", message);
    },
  },
});
