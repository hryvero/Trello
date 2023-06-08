const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config()
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

CLIENT_ID=process.env.CLIENT_ID || "254437401158-qjh5han6ekilpld0014klcqqdgokfp1e.apps.googleusercontent.com"
CLIENT_SECRET=process.env.CLIENT_SECRET || "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"

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, params, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
  done(null, user)
})

passport.deserializeUser(function(user,done){
  done(null, user)
})