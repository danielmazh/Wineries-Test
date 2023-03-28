function logoutUser(req, res) {
    res.clearCookie('jwt');
    res.send('Logged out successfully');
  }
  
  module.exports = {
    logoutUser,
  };
  