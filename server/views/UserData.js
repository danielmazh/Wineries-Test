const UserDataService = require("../services/UserData");

// async function userData(req, res) {
//   const { QuestionnaireFormData } = req.body;

//   try {
//     UserDataService.userData(QuestionnaireFormData);
//     res.send(QuestionnaireFormData);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error confirming FormData");
//   }
// }


// NEW CODE
async function userData(req, res) {
  const { QuestionnaireFormData } = req.body;

  try {
    const formData = UserDataService.userData(QuestionnaireFormData);
    res.send(formData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error confirming FormData");
  }
}




module.exports = {
  userData
};






