const passport = require("passport");
const router = require('express').Router();

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            email: req.user.email,
            role: req.user.role
        }
    })
})

module.exports = router