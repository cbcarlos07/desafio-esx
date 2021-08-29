'use strict';

const tableName = 'tb_usuario'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			tableName,
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				nome: {
					type: Sequelize.STRING(255),
          			allowNull: false
				},
				senha: {
					type: Sequelize.STRING,
					allowNull: false
        		},
				login: {
					type: Sequelize.STRING,
					allowNull: false
        		},
        		

				
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
