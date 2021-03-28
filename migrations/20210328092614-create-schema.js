'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createSchema('test_schema');
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropSchema('test_schema');
  }
};
