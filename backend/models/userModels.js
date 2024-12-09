// models/userModel.js
const db = require("../db");
const bcrypt = require("bcrypt");

const createUser = (userData, callback) => {
  const { name, email, password } = userData;

  const hashPassword = bcrypt.hashSync(password, 10);

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.execute(query, [name, email, hashPassword], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const deleteUser = (id, callback) => {
  const query = "DELETE FROM users WHERE id = ?";
  db.execute(query, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

const updateUser = (payload, callback) => {
  const { name, email, password, id } = payload;

  const hashPassword = bcrypt.hashSync(password, 10);

  const query =
    "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

  db.execute(query, [email, hashPassword, name, id], (err, result) => {
    if (err) {
      callback(err, null);
    }
    callback(null, result);
  });
};

const getUserDetails = (callback) => {
  const query = "SELECT * from users";

  db.execute(query, (err, res) => {
    if (err) {
      return callback(err, null);
    }
    console.log(res);
    return callback(null, res);
  });
};

module.exports = { createUser, deleteUser, updateUser, getUserDetails };
