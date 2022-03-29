const jwt = require("jsonwebtoken");
const passport = require("passport");

/**
 * @DESC Passport middleware
 */
const jwtUserAuth = passport.authenticate("jwt", { session: false });

/**
 * @DESC Check Role Middleware
 */
const checkRole = roles => (req, res, next) =>
    !roles.includes(req.user.role) ?
    res.status(401).json("Unauthorized") :
    next();


module.exports = {
    jwtUserAuth,
    checkRole
}