const { jwtUserAuth } = require("../utils/Auth.utils");
const router = require("express-promise-router")()
const passport = require("passport");


router.get(
    "/profile", jwtUserAuth,
    async(req, res) => {
        return res.json("Hello admin profile");
    }
);

module.exports = router