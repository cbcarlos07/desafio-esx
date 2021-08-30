const { Op } = require('sequelize');


const tableName = 'tb_sala';

module.exports = {
  up: async queryInterface => {
	  try {
		await queryInterface.bulkInsert(tableName ,
			[
				 {
					 
					 nome: 'Sala 1'					 
				 },
				 {
					 
					 nome: 'Sala 2',
					 		 
				 },
				 {
					 
					 nome: 'Sala 3',
					 		 
				 },
				 {
					 
					 nome: 'Sala 4',
					 		 
				 },
				 
				 
		   ],
		   {},
		   
		 );
		  Promise.resolve()
	  } catch (error) {
		  console.log('error', error);
		  Promise.reject(error)
	  }
  },

  down: queryInterface => {
    return queryInterface.bulkDelete(tableName ,
      { id: { [Op.in]: [1, 2, 3, 4] } }
    );
  },
};
