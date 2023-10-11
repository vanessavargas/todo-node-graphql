const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ user }, "vanessa1234", {
    expiresIn: "1h",
  });
};

module.exports = { createToken };
