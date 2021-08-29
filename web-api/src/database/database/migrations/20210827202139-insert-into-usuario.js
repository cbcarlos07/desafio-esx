const { Op } = require('sequelize');


const tableName = 'tb_usuario';
const md5 =  require('md5')
module.exports = {
  up: async queryInterface => {
	  try {
		  await queryInterface.bulkInsert(tableName ,
			 [
				 {
					 
					 nome: 'Carlos Bruno',
					 senha: md5('12345678'),
					 login: 'carlos'					 
				 },
				 {
					 
					 nome: 'Bruno Brito',
					 senha: md5('12345678'),
					 login: 'bruno'					 
				 },
				 {
					 
					 nome: 'Ana',
					 senha: md5('87654321'),
					 login: 'ana'					 
				 },
				 {
					 
					 nome: 'Maria',
					 senha: md5('87654321'),
					 login: 'maria'					 
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
