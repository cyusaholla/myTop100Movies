const express= require('express')
const router= express.Router()
const tvshow= require('../../controllers/movie/tvShow')




router.post('/create', tvshow.create)

router.get('/onTv', tvshow.getAll)

router.get('/popular', tvshow.getPopular)

router.get('/nowPlaying', tvshow.getTopRated)

router.post('/rate/:_id/:rate', tvshow.rateTvShow)



// router.get('/one:_id', tvshow.getOne)
// router.post('/playMovie/:_id/:views', tvshow.PlayMovie)


module.exports= router

