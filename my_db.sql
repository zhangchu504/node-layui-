-- mydb sql
-- 创建一个-- mydb数据库
 SET NAMES UTF8; 
DROP DATABASE IF EXISTS mydb; 
 CREATE DATABASE mydb CHARSET = UTF8; 

 -- 进入 my_db 数据库
  use my_db;
  create table ev_users(
    id int auto_increment primary key unique not null,
    username varchar(255) not null unique,
	password varchar(255) not null,
    nickname varchar(255),
	email varchar(255),
	user_pic TEXT
  ) ENGINE = InnoDB charset = utf8;