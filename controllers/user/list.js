const ListRepo= require('../../repo/user/list')
const Response= require('../../utils/responses')



exports.create= async(req, res)=>{
  try {
    const {
      user_Id,
      name,
      description,
      public,
      sortBy,
      movies,
      image,
      avaliable
    }= req.body


    const listCheck= await ListRepo.findMovieByTitle(name)


    if (listCheck !== null) {
      return Response.validationError(res, "This list  already exists!");
    }
    
    
    const listData= await TvshowRepo.create(
      user_Id,
      name,
      description,
      public,
      sortBy,
      movies,
      image,
      avaliable
    )

    const payload= {
      _id: listData._id,
      user_Id: listData.user_Id,
      name: listData.name,
      description: listData.description,
      public: listData.public,
      sortBy: listData.sortBy,
      movies: listData.movies,
      image: listData.image,
      avaliable: listData.avaliable
    }

    return Response.Success(res, 200, "tv list added  successfully", {
      data: payload,
    });



  } catch (err) {
    console.log(err)
  }
}


exports.AddtoList= async (req, res)=>{
  try {
    
  } catch (err) {
    console.log(err)
  }
}


exports.removingFromList= async (req, res)=>{
  try {
    
  } catch (err) {
    console.log(err)
  }
}


// exports.getAll= async (req, res)=>{
//   try {
//     const {

//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

