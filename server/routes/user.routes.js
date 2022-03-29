const router = require('express').Router();

const UsersController = require('../controllers/users');
const UserModel = require('../models/user.model');
const { hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtUserAuth, checkRole } = require('../utils/Auth.utils');

router.post('/login', (req, res) => {
    UserModel.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Could not find the user."
            })
        }
        //Incorrect password
        if (!compareSync(req.body.password, user.password)) {
            return res.status(401).send({
                success: false,
                message: "Incorrect credentials"
            })
        }

        const payload = {
            email: user.email,
            id: user._id
        }

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" })
        return res.status(200).send({
            success: true,
            message: "Logged in successfully!",
            token: "Bearer " + token
        })

    })
})

router.post('/register', async(req, res, next) => {
    try {
        const { email } = req.body;
        const doesExist = await UserModel.findOne({ email });
        if (doesExist) {
            return res.status(200).json({
                success: true,
                redirectUrl: '/'
            })
        }
        const user = new UserModel(req.body);
        await user.save().then(user => {
            res.send({
                success: true,
                message: "User created successfully",
                user: {
                    id: user._id,
                    email: user.email
                }
            })
        }).catch(err => {
            res.send({
                success: false,
                message: "something went wrong when saving",
                error: err
            })
        })

    } catch (error) {
        console.log("Error", error)
        res.status(500).send(error)
    }
})

// Admin Protected Route
router.get(
    '/user-protectd',
    jwtUserAuth,
    checkRole(["user"]),
    async(req, res) => {
        return res.json("Hello User");
    }
);





module.exports = router