# Language Archive - Backend

## Built With

* [![Node.js][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Postgres][Postgres-shield]][Postgres-url]

## Requirements

### Install psql

1) Download postgresql: https://www.postgresql.org/download/windows/
2) Add installed path C:/Programfiles/Postgresql/[version]/bin to the PATH in System variable in Environment variable.

### Create database and table
 
1) Connect psql with `psql -U postgres`
2) Create new database `CREATE DATABASE mydb`
3) Connect database `\C mydb`
4) Create table
```
CREATE TABLE archive (
   id SERIAL PRIMARY KEY,
   category VARCHAR(255),
   example VARCHAR(255),
   translate VARCHAR(255),
   comment TEXT           
   );
```
5) You can see crated table with `\d archive`

## Start & watch

`npm run dev`

Server connect with `http://localhost:3000`

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Postgres-shield]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/