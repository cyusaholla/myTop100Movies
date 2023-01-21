const express= require('express')
const router= express.Router()
const Movie= require('../../controllers/movie/movie')




router.post('/create', Movie.create)

router.get('/one:_id', Movie.getOne)

router.get('/nowPlaying', Movie.getNowPlaying)

router.post('/playMovie/:_id/:views', Movie.PlayMovie)

router.get('/popular', Movie.getPopular)

router.get('/nowPlaying', Movie.getTopRated)

router.post('/rate/:_id/:rate', Movie.rateMovie)




module.exports= router