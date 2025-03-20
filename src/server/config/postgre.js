require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: process.env.DB_PORT,
  logging: false,
});

const syncDatabase = async () => {
    try {
      await sequelize.sync({force: false}); // Reset DB mỗi lần chạy lại
      console.log("Database & tables created!");
    } catch (error) {
      console.error("Error syncing database:", error);
    }
};

module.exports = sequelize;