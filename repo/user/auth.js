import User from "../../models/user/auth";


exports.create= async (userName, email, password)=> {
  try {
    console.log(userName, email, password)
    return await  User.create({userName, email, password })
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







exports.updatePassword= async ()=> {
  try {
    
  } catch (err) {
    console.log(err)
  }
}


exports.updateEmail= async ()=> {
  try {
    
  } catch (err) {
    console.log(err)
  }
}



exports.getUserByName= async (userName)=>{
  try {
    return await  User.findOne({userName:userName })
            .then(res =>{
              return res;
            })
            .catch(err=> {
              console.log(err)
              return err
            })
  } catch (err) {
    console.log(err)
  }
}

exports.getUserByEmail= async (email)=>{
  try {
    return await  User.findOne({email:email })
            .then(res =>{
              return res;
            })
            .catch(err=> {
              console.log(err)
              return err
            })
  } catch (err) {
    console.log(err)
  }
}

