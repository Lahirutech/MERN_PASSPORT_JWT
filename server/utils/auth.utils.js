const jwt = require("jsonwebtoken");
const passport = require("passport");

/**
 * @DESC Passport middleware
 */
const jwtUserAuth = passport.authenticate("jwt", { session: false });


module.exports = {
    jwtUserAuth
}