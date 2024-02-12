const {Router} = require("express")

const whoAmIRouter = Router()

whoAmIRouter.get('/', (req, res) => {
    return res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
    })
})

module.exports = whoAmIRouter