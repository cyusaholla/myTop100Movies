const express= require('express')
const router= express.Router()
const Auth= require('../../controllers/user/auth')

router.post('/signup', Auth.signup)
router.post('/signin', Auth.signin)


module.exports= router