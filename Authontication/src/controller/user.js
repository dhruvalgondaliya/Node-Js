const { User } = require('../model/User')


const userRegistration = async (req, res) => {

    try {
        const { username, password } = req.body
        await User.create({ username, password })
        res.json({ "msg": "User created  successfully" })
    } catch (error) {
        console.log(error)
        res.json({
            "msg": "user not created"
        })
    }
}
module.exports = { userRegistration }