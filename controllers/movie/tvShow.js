const TvshowRepo= require('../../repo/movie/tvShow')
const Response= require('../../utils/responses')




exports.create= async (req, next)=>{
  try {
    const {
      user_Id,
      title,
      overview,
      IMDB_Id,
      season
    }= req.body

    const tvShowCheck= await TvshowRepo.findMovieByTitle(title)


    if (tvShowCheck !== null) {
      return Response.validationError(res, "This tv show  already exists!");
    }

    const tvshowData= await TvshowRepo.create(
      user_Id,
      title,
      overview,
      IMDB_Id,
      season
    )

    const payload= {
      _id: tvshowData._id,
      title: tvshowData.title,
      overview: movieData.overview,
      IMDB_Id: tvshowData.IMDB_Id,
      season: tvshowData.season,
      rate: tvshowData.rate,
      views: tvshowData.views
    }

    return Response.Success(res, 200, "tv show added  successfully", {
      data: payload,
    });


  } catch (err) {
    console.log(err)
  }
}


exports.getAll= async (req, next)=>{
  try {
    const tvshowData= await TvshowRepo.getAll()

    if (tvshowData !== null) {
      return Response.validationError(res,  "we have no tv shows  for now!");
    }

     return Response.Success(res, 200, "getting tv show process done successfully", {
      data: tvshowData,
    });
    

  } catch (err) {
    console.log(err)
  }
}


exports.getPopular= async (req, next)=>{
  try {
    const tvShowData= await TvshowRepo.getPopular()

    if (tvShowData !== null) {
      return Response.validationError(res,   "we have no tv shows  for now!");
    }

    return Response.Success(res, 200, "getting tv show process done successfully", {
      data: tvShowData,
    });


  } catch (err) {
    console.log(err)
  }
}


exports.rateTvShow= async (req, res)=>{
  try {
    const { _id, rate}= req.body


    const tvShowData= await TvshowRepo.rateTvShow(_id, rate)

    if (tvShowData !== null) {
      return Response.validationError(res,  "process failed!");
    }

    return Response.validationError(res, 200,  "rate updated successfully!");

  } catch (err) {
    console.log(err)
  }
}



exports.getTopRated= async (req, res)=>{
  try {
    const tvshowData= await topRatedTvshow.topRated()

    if (tvshowData !== null) {
      return Response.validationError(res,   "we have no tv show  for now!");
    }


    return Response.Success(res, 200, "getting top rated tv show process done successfully", {
      data: tvshowData,
    });


  } catch (err) {
    console.log(err)
  }
}





// exports.getOne= async (req, next)=>{
//   try {
    
//   } catch (err) {
//     console.log(err)
//   }
// }


// exports.getAiringToday= async (req, next)=>{
//   try {
    
//   } catch (err) {
//     console.log(err)
//   }
// }


