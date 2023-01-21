import Tvshow from "../../models/movie/tvShow";



exports.create= async ( 
  user_Id,
  title,
  overview,
  IMDB_Id,
  season
  )=>{
  try {
    return await  Tvshow.create(
      user_Id,
      title,
      overview,
      IMDB_Id,
      season)
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


exports.getTvshowByTitle= async (title)=>{
  try {
    return await  Tvshow.find(title)
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
    return await  Tvshow.find()
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


exports.playTvShow= async (_id, views)=>{
  try {
    return await  Tvshow.findByIdAndUpdate(_id, {views})
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
    return await  Tvshow.find().limit(20).sort([['views', 'descending']])
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


exports.rateTvShow= async (_id, rate)=>{
  try {
    return await  Tvshow.findByIdAndUpdate(_id, {rate})
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


exports.topRatedTvshow= async ()=>{
  try {
    return await  Tvshow.find().limit(20).sort([['rate', 'descending']])
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


