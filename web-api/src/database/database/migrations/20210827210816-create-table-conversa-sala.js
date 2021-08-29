'use strict';

const tableName = 'tb_conversa_sala'
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
				id_sala: {
					type: Sequelize.INTEGER,
					allowNull: false
        		},
				id_usuario: {
					type: Sequelize.INTEGER,
					allowNull: false
        		},
				mensagem: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				data_mensagem: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: Sequelize.now
        		},
				
        		

				
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
