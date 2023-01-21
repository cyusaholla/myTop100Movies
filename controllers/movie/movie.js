const MovieRepo= require('../../repo/movie/movie')
const Response= require('../../utils/responses')





exports.create= async (req, res)=>{
  try {

    const {
      user_Id,
      title,
      overview,
      IMDB_Id,
      Adult,
      video,
      date,
      tagline,
      runtime,
      budget,
      revenue,
      webpage
    }= req.body


    const movieCheck= await MovieRepo.findMovieByTitle(title)


    if (movieCheck !== null) {
      return Response.validationError(res, "This Movie  already exists!");
    }


    const movieData= await MovieRepo.cretae(
      user_Id,
      title,
      overview,
      IMDB_Id,
      Adult,
      video,
      date,
      tagline,
      runtime,
      budget,
      revenue,
      webpage
    )

    const payload= {
      _id: movieData._id,
      title: movieData.title,
      overview: movieDataoverview,
      IMDB_Id: movieData.IMDB_Id,
      Adult: movieData.Adult,
      video: movieData.video,
      date: movieData.date,
      tagline: movieData.runtime,
      runtime: movieData.runtime,
      budget: movieData.budget,
      revenue: movieData.revenue,
      webpage: movieData.webpage,
      rate: movieData.rate,
      views: movieData.views
    }

    return Response.Success(res, 200, "movie added  successfully", {
      data: payload,
    });

  } catch (err) {
    console.log(err)
  }
}


exports.getNowPlaying= async (req, res)=>{
  try {
    const movieData= await MovieRepo.getAll()

    if (movieData !== null) {
      return Response.validationError(res, "we have no Movies  for now!");
    }

     return Response.Success(res, 200, "getting movies process done successfully", {
      data: movieData,
    });


  } catch (err) {
    console.log(err)
  }
}


exports.getOne= async (req, res)=>{
  try {

    const {_id}= req.body

    const movieData= await MovieRepo.getOne(_id)
    if (movieData !== null) {
      return Response.validationError(res,  "This Movie  is not exists!");
    }

    const payload= {
      _id: movieData._id,
      title: movieData.title,
      overview: movieDataoverview,
      IMDB_Id: movieData.IMDB_Id,
      Adult: movieData.Adult,
      video: movieData.video,
      date: movieData.date,
      tagline: movieData.runtime,
      runtime: movieData.runtime,
      budget: movieData.budget,
      revenue: movieData.revenue,
      webpage: movieData.webpage,
      rate: movieData.rate,
      views: movieData.views
    }

     return Response.Success(res, 200, "getting movie process done successfully", {
      data: payload,
    });


  } catch (err) {
    console.log(err)
  }
}


exports.PlayMovie= async (req, res)=>{
  try {

    const { _id, views}= req.body


    const movieData= await MovieRepo.getOne(_id, views)

    if (movieData !== null) {
      return Response.validationError(res,  "process failed!");
    }

    return Response.validationError(res, 200,  "views updated successfully!");

  } catch (err) {
    console.log(err)
  }
}



exports.getPopular= async (req, res)=>{
  try {
    console.log('hello')
    const movieData= await MovieRepo.getPopular()

    if (movieData !== null) {
      return Response.validationError(res, "we have no Movies  for now!");
    }


    return Response.Success(res, 200, "getting movies process done successfully", {
      data: movieData,
    });
  } catch (err) {
    console.log(err)
  }
}


exports.rateMovie= async (req, res)=>{
  try {
    const { _id, rate}= req.body


    const movieData= await MovieRepo.rateMovie(_id, rate)

    if (movieData !== null) {
      return Response.validationError(res,  "process failed!");
    }

    return Response.validationError(res, 200,  "rate updated successfully!");

  } catch (err) {
    console.log(err)
  }
}



exports.getTopRated= async (req, res)=>{
  try {

    const movieData= await MovieRepo.topRated()

    if (movieData !== null) {
      return Response.validationError(res,   "we have no Movies  for now!");
    }


    return Response.Success(res, 200, "getting top rated movies process done successfully", {
      data: movieData,
    });

  } catch (err) {
    console.log(err)
  }
}





