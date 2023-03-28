const logInService = require("../services/LogIn");

async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const token = await logInService.loginUser(email, password);
    if (!token) {
      res.status(401).send("Invalid email or password");
      return;
    }
    res.cookie("jwt", token, { httpOnly: true });
    res.send({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  loginUser,
};