countries | CREATE TABLE `countries` (
  `country_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(20) NOT NULL,
  `population` varchar(20) NOT NULL,
  `continent` varchar(20) DEFAULT NULL,
  `surface_area` varchar(20) NOT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1

INSERT INTO countries VALUES ( 1 ,'Denmark ','5.77 million','Europe ','42,933 km²' );
INSERT INTO countries VALUES (2, 'Finland', '5.53 million', 'Europe', '338,424 km²'   );
INSERT INTO countries VALUES ( 3, 'Iceland' ,'360,390','Europe','103,000 km²'  );
INSERT INTO countries VALUES ( 4,'Norway', '5.328 million','Europe','385,203 km²'  );
INSERT INTO countries VALUES ( 5 ,'Sweden', '10.04 million', 'Europe', '450,295 km²' );
INSERT INTO countries VALUES ( 6 ,'Malaysia', '2.6 million', 'Asia','330,803 km²');
INSERT INTO countries VALUES ( 7,'Philippines', '108.116 million',' Asia',' 300,000 km²'  );
INSERT INTO countries VALUES (8, 'Vietnam' ,' 96.46 million',' Asia', '331,210 km²'  );
INSERT INTO countries VALUES (9, 'Thailand','69,62 million','Asia','513,120 km²');
INSERT INTO countries VALUES (10, 'Japan','126,707 million','Asia','377,973 km²');
