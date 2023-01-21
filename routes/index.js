const express= require('express')
const router= express.Router()


router.use('/api/auth', require('./user/auth'))
router.use('/api/movie', require('./movie/movie'))
router.use('/api/tvShow', require('./movie/tvShow'))


module.exports= router

