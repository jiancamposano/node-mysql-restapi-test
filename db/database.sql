create database if not exists companydb
use companydb
create table employee (

    id int (11) not null primary key auto_increment,
    name varchar(45) default null,
    salary int(5) default null
   

)

insert into employee values('Joe',1000)