-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.1-dmr - MySQL Community Server (GPL)
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando dados para a tabela chat.SequelizeMeta: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
REPLACE INTO `SequelizeMeta` (`name`) VALUES
	('20210827201901-create-table-usuario.js'),
	('20210827202139-insert-into-usuario.js'),
	('20210827205148-create-table-sala.js'),
	('20210827205719-create-table-conversa.js'),
	('20210827210357-create-table-conversa-usuario.js'),
	('20210827210816-create-table-conversa-sala.js'),
	('20210830022504-insert-into-sala.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;

-- Copiando dados para a tabela chat.tb_conversa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tb_conversa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_conversa` ENABLE KEYS */;

-- Copiando dados para a tabela chat.tb_conversa_chat: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tb_conversa_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_conversa_chat` ENABLE KEYS */;

-- Copiando dados para a tabela chat.tb_conversa_sala: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tb_conversa_sala` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_conversa_sala` ENABLE KEYS */;

-- Copiando dados para a tabela chat.tb_sala: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `tb_sala` DISABLE KEYS */;
REPLACE INTO `tb_sala` (`id`, `nome`) VALUES
	(1, 'Sala 1'),
	(2, 'Sala 2'),
	(3, 'Sala 3'),
	(4, 'Sala 4');
/*!40000 ALTER TABLE `tb_sala` ENABLE KEYS */;

-- Copiando dados para a tabela chat.tb_usuario: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `tb_usuario` DISABLE KEYS */;
REPLACE INTO `tb_usuario` (`id`, `nome`, `senha`, `login`) VALUES
	(1, 'Carlos Bruno', '25d55ad283aa400af464c76d713c07ad', 'carlos'),
	(2, 'Bruno Brito', '25d55ad283aa400af464c76d713c07ad', 'bruno'),
	(3, 'Ana', '5e8667a439c68f5145dd2fcbecf02209', 'ana'),
	(4, 'Maria', '5e8667a439c68f5145dd2fcbecf02209', 'maria');
/*!40000 ALTER TABLE `tb_usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
