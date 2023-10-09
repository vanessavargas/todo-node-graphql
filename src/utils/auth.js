const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ user }, "hello123", {
    expiresIn: "1h",
  });
};

module.exports = { createToken };
