CREATE DATABASE IF NOT EXISTS TEST;

USE TEST;

CREATE TABLE text (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) DEFAULT NULL,
    description VARCHAR(200) DEFAULT NULL,
    links VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
)

DESCRIBE text;

INSERT INTO text VALUES
    (1,'Los animales fantasticos' , 'trata de animales que viven en ...', 'https://wikiwki'),
    (2,'Los especiales fantasticos' , 'trata de animales que viven en ...', 'https://wikiwki'),
    (3,'Los estudiantes fantasticos' , 'trata de animales que viven en ...', 'https://wikiwki'),
    (4,'Los chuchos fantasticos' , 'trata de animales que viven en ...', 'https://wikiwki');