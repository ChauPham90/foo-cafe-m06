CREATE DATABASE world
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

-- fix table
ALTER TABLE cities ADD COLUMN country_code VARCHAR(10);
UPDATE cities set country_code = 'JPN' where city_id = 10;
UPDATE cities set country_code = 'THA' where city_id = 9;
UPDATE cities set country_code = 'VNM' where city_id = 8;
UPDATE cities set country_code = 'PHL' where city_id = 7;
UPDATE cities set country_code = 'MYS' where city_id = 6;
UPDATE cities set country_code = 'SWE' where city_id = 5;
UPDATE cities set country_code = 'NOR' where city_id = 4;
UPDATE cities set country_code = 'ISL' where city_id = 3;
UPDATE cities set country_code = 'FIN' where city_id = 2;
UPDATE cities set country_code = 'DNK' where city_id = 1;
