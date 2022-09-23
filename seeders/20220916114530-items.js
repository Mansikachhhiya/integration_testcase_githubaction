'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',[{
      ProductName : 'Mobile',
      ProductPrice: 434,
      userId : 1,
      createdAt :new Date(),
      updatedAt : new Date()
    },
      {
        ProductName : 'jfs',
        ProductPrice: 4374,
        userId : 2,
        createdAt :new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Products' ,null ,{})
  }
};
