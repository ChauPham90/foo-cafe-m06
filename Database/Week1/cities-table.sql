cities | CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 |

INSERT INTO cities (city_name) VALUES ('Copenhagen');
INSERT INTO cities (city_name) VALUES ('Helsinki');
INSERT INTO cities (city_name) VALUES ('Reykjavik');
INSERT INTO cities (city_name) VALUES ('Oslo');
INSERT INTO cities (city_name) VALUES ('Stockholm');
INSERT INTO cities (city_name) VALUES ('Kuala Lumpur');
INSERT INTO cities (city_name) VALUES ('Manila');
INSERT INTO cities (city_name) VALUES ('Ha Noi');
INSERT INTO cities (city_name) VALUES ('Bangkok');
INSERT INTO cities (city_name) VALUES ('Tokyo');