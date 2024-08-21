const { User } = require('../model/user')

const userRegistration = async (req, res) => {

    const UserData = req.body

    const userName = UserData['userName'];
    const password = UserData['password'];

    await User.create({ userName, password })

    res.json({
        msg: "User Registration Successfully!"
    })

}

module.exports = { userRegistration }