const signUpService = require("../services/SignUp");

function signUp(req, res, next) {
  const { username, email, password } = req.body;

  signUpService.signUp(username, email, password)
    .then((user) => {
      res.send(`User ${user.username} signed up successfully`);
    })
    .catch((err) => {
      if (err.message === "Email address is already associated with an account" || err.message === "Username is already in use") {
        res.status(400).send(err.message);
      } else {
        next(err);
      }
    });
}

module.exports = {
  signUp,
};
