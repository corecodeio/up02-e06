# Backend

## Installed packages

```
  $ npm init -y
  $ npm install --save-dev nodemon
  $ npm install --save express
  $ npm install --save dotenv
  $ npm install --save oracledb
  $ npm install --save bcryptjs
```

## .env

```
  # SERVER CONFIGURATIONS
  SERVER_PORT=8500
  # DATABASE CONFIGURATIONS
  ORACLE_USER=*****
  ORACLE_PASS=******
  ORACLE_CONNSTR=localhost:1521/orclpdb
```

## SQL

```sql
CREATE TABLE CATEGORY(
	CATEGORY NUMBER,
	PERSON NUMBER NOT NULL,
	NAME VARCHAR2(100) NOT NULL,
	DESCRIPTION VARCHAR2(200) NOT NULL,
	ADD_DATE DATE DEFAULT SYSDATE,
	MOD_DATE DATE,
	PRIMARY KEY(CATEGORY),
	FOREIGN KEY(PERSON) REFERENCES PERSON(PERSON)
);

CREATE SEQUENCE SQ_CATEGORY NOCACHE;
```
