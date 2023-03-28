function userData(formData) {
  console.log('FormData received on server:', formData);
  return formData;
}

module.exports = {
  userData
};