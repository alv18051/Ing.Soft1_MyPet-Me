--DDL base de datos My Pet&Me

--Tablas
CREATE TABLE vet(
    id varchar(10) NOT NULL,
    name varchar(20) NOT NULL,
    address varchar(35) NOT NULL,
    phone varhcar(14) NOT NULL,
    vet_type varchar(15) NOT NULL,
    open_time time NOT NULL,
    close_time time NOT NULL
    emergency boolean NOT NULL,
    intern_ranking varchar(10),
    views INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE veterinary(
    colegiado varchar(10) NOT NULL,
    speciality varchar(20) NOT NULL,
    name varchar(20) NOT NULL,
    vet_id NOT NULL,
    PRIMARY KEY(colegiado) 
);

CREATE TABLE user(
    email varchar(20) NOT NULL,
    username varchar(15) NOT NULL,
    password varchar(15) NOT NULL,
    user_type varchar(10) NOT NULL,
    PRIMARY KEY(email)
);

CREATE TABLE services(
    id varchar(10) NOT NULL,
    name varchar(25) NOT NULL,
    price double(5,2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABEL LOCATION(
    id varchar(10) NOT NULL,
    longitude double(16,8) NOT NULL,
    latitude double(16,8) NOT NULL,
    address varchar(20) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE QUERY(
    vet_id varchar(10) NOT NULL,
    date_time DATETIME NOT NULL,
    user_email varhcar(20) NOT NULL,
    query_type varchar(10) NOT NULL,
    PRIMARY KEY(vet_id,user_email,date_time,query_type)
);

--Relaciones
CREATE TABLE vet_services(
    vet_id varchar(10) NOT NULL,
    services_id varchar(10) NOT NULL,
    PRIMARY KEY(vet_id, services_id) 
);

CREATE TABLE query_vet(
    query_id varchar(80) NOT NULL,
    vet_id varchar(10) NOT NULL,
    PRIMARY KEY(query_id, vet_id)
);

CREATE TABLE query_user(
    query_id varchar(80) NOT NULL,
    user_email varchar(10) NOT NULL,
    PRIMARY KEY(query_id, user_email)
);