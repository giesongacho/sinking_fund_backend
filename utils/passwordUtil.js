const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
  hashPassword: async (password) => {
    // Trim and validate the password
    const trimmedPassword = password.trim();
    // Hash the password
    return bcrypt.hash(trimmedPassword, SALT_ROUNDS);
  },

  comparePassword: async (password, hash) => {
    // Trim the input password before comparing
    return bcrypt.compare(password.trim(), hash);
  }
};