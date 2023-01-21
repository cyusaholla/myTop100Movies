const AuthRepo= require('../../repo/user/auth')
const passportConfig= require( '../../config/passport')
const Response= require('../../utils/responses')
const bcrypt= require('bcryptjs')
const jwt = require("jsonwebtoken");



exports.signup= async (req, res)=> {
  try {
    const {
      userName,
       email, 
       password
      }= req.body;

      const userCheck= await AuthRepo.getUserByName(userName)
      if (userCheck !== null) {
        return Response.validationError(res, "Username already exists!");
      }
      const emailCheck= await AuthRepo.getUserByEmail(email)
      if (emailCheck !== null) {
        return Response.validationError(res, "Email already exists!");
      }

      const encryptedPassword = await bcrypt.hash(password, 10);
      const userData= await AuthRepo.create(
        userName,
        email, 
        encryptedPassword
      )
      const payload= {
        id: userData._id,
        userName: userData.userName,
        email: userData.email,
      }
      
      const token = await jwt.sign({
        user: payload
      }, passportConfig.secret);

    return Response.Success(res, 200, "user signed up successfully", {
      user: payload,
      token: token
    });
  } catch (err) {
    console.log(err)
    Response.InternalServerError(res, "We are having issues! please try again soon")
  }
}



exports.signin = async (req, res) => {
  try {
      const {
        userName,
        password
      } = req.body;

      const userData = await AuthRepo.getUserByName(userName);
      if (userData === null) {
          return Response.validationError(res, "userName does not exists!");
      }

      if (!await bcrypt.compare(password, userData.password)) {
          return Response.validationError(res, "Invalid credentials");
      }

      const payload = {
          id: userData._id,
          userName: userData.userName,
          email: userData.email,
      };
      const token = await jwt.sign({
          user: payload
      }, passportConfig.secret);


      return Response.Success(res, 200, "user signed in successfully", {
          user: payload,
          token: token
      });


  } catch (error) {
      throw error
  }
}




exports.updatePassword= async (req, res)=> {
  try {
    
  } catch (err) {
    console.log(err)
  }
}



exports.updateEmail= async (req, res)=> {
  try {
    
  } catch (err) {
    console.log(err)
  }
}



