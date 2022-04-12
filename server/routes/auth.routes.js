const passport = require("passport");
const router = require("express").Router();

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        email: req.user.email,
        role: req.user.role,
      },
    });
  }
);

router.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("req", req.user);
    const { email, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { email, role } });
  }
);
module.exports = router;
