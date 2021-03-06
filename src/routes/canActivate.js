const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('../config/auth');

router.get("/", (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const [bearer, token] = auth.split(' ');
        jwt.verify(token, config.secret, function(err, decode) {
            try {
                if (!decode) {
                    return res.status(200).json(false);
                } else {
                    return res.status(200).json(true);
                }
            } catch {
                return false;
            }
        });
    } catch (error) {
        res.status(400).json("Erro ao fazer requisição: " + error);
    }
});

module.exports = router;