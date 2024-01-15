'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'inderagandhi Internation airport',
      cityId: 1, //delhi
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'ahilyabai Internation airport',
      cityId: 2, //indore
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'rajdhani Internation airport',
      cityId: 1, //delhi
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'Chhatrapati Shivaji Maharaj International Airport', 
      cityId: 3, //mumbai
      createdAt: new Date(),
      updatedAt: new Date()

    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
