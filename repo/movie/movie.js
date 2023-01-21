import Movie from "../../models/movie/movie";


exports.findMovieByTitle= async (title)=>{
  try {
    return await  Movie.findOne(title)
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}


exports.create= async (
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
  )=>{
  try {
    return await  Movie.create({
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
    })
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}


exports.getOne= async (_id)=>{
  try {
    return await  Movie.findById(_id)
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}


exports.getAll= async ()=>{
  try {
    return await  Movie.find({"date":{ $gte : date.now()}})
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}



exports.playMovie= async (_id, views)=>{
  try {
    return await  Movie.findByIdAndUpdate(_id, {views})
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}


exports.getPopular= async ()=>{
  try {
    return await  Movie.find().limit(20).sort([['views', 'descending']])
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}


exports.rateMovie= async (_id, rate)=>{
  try {
    return await  Movie.findByIdAndUpdate(_id, {rate})
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}


exports.topRated= async ()=>{
  try {
    return await  Movie.find().limit(20).sort([['rate', 'descending']])
    .then(res =>{
      return res;
    })
    .catch(err=> {
      return err
    })
  } catch (err) {
    console.log(err)
  }
}



// exports.tendings= async ()=> {
//   try {
    
//   } catch (err) {
//     console.log(err)
//   }
// }