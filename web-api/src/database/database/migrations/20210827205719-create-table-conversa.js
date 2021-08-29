'use strict';

const tableName = 'tb_conversa'
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
				usuario_remetente: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				usuario_destino: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				data_inicio_conversa: {
					type: Sequelize.DATE,
					allowNull: true,
					defaultValue: Sequelize.now
        		},
        		

				
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
