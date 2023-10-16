const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // || "";
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = verified.user;
    console.log(req.verifiedUser);
    next();
  } catch (error) {
    console.log(error);
    next();
  }
}

module.exports = {
  authenticate
};