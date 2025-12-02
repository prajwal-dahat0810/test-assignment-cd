require("dotenv").config();
module.exports = {
  url: process.env.DATABASE_URL || "mongodb://admin:password@db:27017/",
};
