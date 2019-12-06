delimiter //
CREATE TRIGGER checkTotalLanguage 
BEFORE INSERT ON countryLanguage
FOR EACH ROW 
BEGIN  
DECLARE alert VARCHAR(20);
DECLARE  msg VARCHAR(200);
SET alert = (SELECT COUNT(language) FROM countrylanguage WHERE countrycode = new.countrycode); 
IF alert > 9 THEN  SET msg = ' too much language '; 
SIGNAL SQLSTATE '02000' SET MESSAGE_TEXT = msg; 
END IF;
END//
delimiter  ;

-- test

mysql> INSERT INTO countrylanguage VALUES ( 'VNM','Shona','F',72.1);
ERROR 1643 (02000): too much language