const signUpService = require("../services/SignUp");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./server/SQL/users.db");

function signUp(username, email, password) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
      if (err) {
        reject(err);
      } else if (row) {
        // Email already exists in database
        reject(new Error("Email address is already associated with an account"));
      } else {
        db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
          if (err) {
            reject(err);
          } else if (row) {
            // Username already exists in database
            reject(new Error("Username is already in use"));
          } else {
            bcrypt.hash(password, 10, function (err, hash) {
              if (err) {
                reject(err);
              } else {
                db.run(
                  "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
                  [username, email, hash],
                  (err) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve({ username, email });
                    }
                  }
                );
              }
            });
          }
        });
      }
    });
  });
}




module.exports = {
  signUp,
};
