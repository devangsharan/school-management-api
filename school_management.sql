-- MySQL dump for school_management database

SET FOREIGN_KEY_CHECKS = 0;
SET UNIQUE_CHECKS = 0;

DROP TABLE IF EXISTS `schools`;
CREATE TABLE `schools` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `schools` (`id`, `name`, `address`, `latitude`, `longitude`) VALUES 
(1, 'ABC Public School', '123 Main Street, Delhi', 28.7041, 77.1025),
(2, 'XYZ International', '456 Market Road, Mumbai', 19.076, 72.8777);

SET FOREIGN_KEY_CHECKS = 1;
SET UNIQUE_CHECKS = 1;
