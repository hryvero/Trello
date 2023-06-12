const { Router } = require("express");
const passport = require("passport")

const { authMiddleware } = require("../middlewares");
const { authController } = require("../controllers");

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.send('<a href="http://localhost:3001/auth/google" >Authorize with Google</a>')
})

authRouter.post(
  "/register",
  authMiddleware.isLoginDataValid,
  authMiddleware.hashPassword,
  authController.register
);

authRouter.post("/login", authController.login);

//Login with google

authRouter.get('/google', passport.authenticate("google", { scope: ['profile', 'email'] }) )

authRouter.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  }), )

  authRouter.get('/logout', function (req, res, next) {
    req.
      req.logout();
    res.redirect('/');
  });


module.exports=authRouter