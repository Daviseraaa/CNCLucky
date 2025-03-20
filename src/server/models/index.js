const sequelize = require("../config/postgre");
const User = require("./User");

const syncDatabase = async () => {
  try {
    await sequelize.sync(); // Reset DB mỗi lần chạy lại
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

module.exports = { sequelize, User, syncDatabase };
