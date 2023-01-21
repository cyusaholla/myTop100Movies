const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const passportConfig = require("../config/passport");

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

options.secretOrKey = passportConfig.secret;

passport.use(new JwtStrategy(options, 
	async (token, done) => {
		try {
			//console.log(token);
			return done(null, token.user);
		} catch (error) {
			done(error);
		}
	}
));