'use strict';
const { hashPassword } = require('../utils/passwordUtil');
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await hashPassword('admin123');
   return queryInterface.bulkInsert('Logins', [
    {
      username: "admin",
      password: hashedPassword,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzM0NTk0MzQzLCJleHAiOjE3MzQ2ODA3NDMsInN1YiI6ImFjY2Vzc2FwaSJ9.iJtkM6w2p8tAA3sF5L40eSCeHhij_EiJ94p54TU1Ywk',
      createdAt: new Date(),
      updatedAt: new Date(),
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Logins', null, {});
  }
};
