const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const {User} = require("../models");
const { authValidator } = require("../validators");
const { ApiError } = require("../errors/ApiError");

const hashPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if(password){
      return  bcrypt.hash(password, 10);
    }

  } catch (e) {
    next(e);
  }
};

const isLoginDataValid = (req, res, next) => {
  try {
    const { value, error } = authValidator.loginSchema.validate(req.body);

    if (error) {
      next(new ApiError(error.details[0].message, res.status(400)));
      return;
    }

    req.body = value;

    next();
  } catch (e) {
    next(e);
  }
};

// const matchPassword = async (req, res, next) => {
//   try {
//     const {
//       user,
//       body: { password, email },
//     } = req;

//     console.log(user._id);

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       res.status(404).json({ message: "Не вірний пароль" });
//     }

//     const token = jwt.sign(
//       {
//         userId: user.id,
//       },
//       config.get("jwtSecret"),
//       { expiresIn: "2h" }
//     );

//     res.json({ token, user });
//     next();
//   } catch (e) {
//     next(e);
//   }
// };

module.exports = {
  hashPassword,
  isLoginDataValid,
  // matchPassword,
};