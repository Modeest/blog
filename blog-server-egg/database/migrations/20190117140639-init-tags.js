'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING, TINYINT } = Sequelize;
    await queryInterface.createTable('tags', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: {
        type: STRING(30),
        allowNull: false,
      },
      active: {
        type: TINYINT,
        allowNull: false,
        defaultValue: 1,
        validate: {
          max: 1,
          min: 0,
        },
      },
      created_at: {
        type: DATE,
        allowNull: false,
      },
      updated_at: {
        type: DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('tags', [ 'title' ], {
      type: 'unique',
      name: 'tag_title',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('tags');
  },
};
