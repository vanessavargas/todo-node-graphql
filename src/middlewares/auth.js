const jwc = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split('')[1] || "";
    try {
        const verified = jwc.verify(token, '1234');
        req.verifiedUser = verified.user;
        next();
    } catch (error) {
        next();
    }
}

module.exports = {
    authenticate,
}