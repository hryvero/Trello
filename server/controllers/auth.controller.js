const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const { User } = require("../models");
const { authMiddleware } = require("../middlewares");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });


    if (candidate) {
      return res.status(400).json({ message: "Користувач вже існує" });
    }

    const newPassword = await authMiddleware.hashPassword(password);

    const user = await User.create({ email, password: newPassword });

    res.status(201).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return res.status(404).json({ message: "Користувача не існує" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(404).json({ message: "Не вірний пароль" });
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      config.get("jwtSecret"),
      { expiresIn: "2h" }
    );

    res.json({ token, userId: user.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};