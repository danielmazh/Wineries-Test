const jwt = require('jsonwebtoken');
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./server/SQL/users.db");
const bcrypt = require('bcrypt');

function loginUser(email, password) {
  const query = `SELECT * FROM users WHERE email = '${email}'`;

  return new Promise((resolve, reject) => {
    db.get(query, async (err, row) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      if (!row) {
        console.log(`No user found with email ${email}`);
        resolve(null);
        return;
      }

      const isPasswordMatch = await bcrypt.compare(password, row.password);

      if (!isPasswordMatch) {
        console.log(`Password does not match for user ${row.id}`);
        resolve(null);
        return;
      }

      console.log(`Logged in user ${row.id} with email ${row.email}`);
      const user = {
        id: row.id,
        email: row.email,
        firstName: row.first_name,
        lastName: row.last_name,
      };
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      resolve(token);
    });
  });
}


module.exports = {
  loginUser,
};