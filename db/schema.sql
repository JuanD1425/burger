
USE uwr48sdazfxg2lvh;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burgerName VARCHAR(100) NULL,
  devoured TINYINT(0) NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);