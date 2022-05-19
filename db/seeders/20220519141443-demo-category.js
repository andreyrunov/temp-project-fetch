'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Categories', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Categories', [{
        nameCategory: 'Электроника',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        nameCategory: 'Бытовая химия',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        nameCategory: 'Продукты',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        nameCategory: 'Сантехника',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        nameCategory: 'Сторительство и ремонт',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
