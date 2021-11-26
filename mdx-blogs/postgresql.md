## PostgreSQL

- Open source object-relational Database Management System(ORDBMS) that provides an implementation of the SQL querying language.
- Object-Oriented (Class, inheritance)
- Featured Transaction Properties => ACID properties.
- having many advanced features like reliable transactions and concurrency without reading locks.
- Manages Concurrency

- RDBMS with client-server Architecture.
- Uses `process per user` client/server Model. => Each user is granted/given a process that will remain alive till the user closes the connection.
- Programs run by the client connects to server instance & requests read and write operations.

- Relations = Table
- Tuple = Row
- Attribute = Column 

- Default Port of PostgreSQL = `5432`
- By Default Postgresql creates a database `Postgres

- Any select, insert, update, delete to the data is done in the shared buffer area. The data is then written to data files located on a physical disk through background writer processes.

#### Installation on Linux
- [Follow this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

## After Installation
  - We got a command line Utility - psql. 
  - Open terminal and enter `psql`
  - if not try `sudo -i -u postgres` then `psql` (this is Switching over to the postgres account/ on your server).
  -  try `\l` command

## Commands

| Command                    |              Description              |
|----------------------------|---------------------------------------|
| `\l`                       | prints all databases list             |
| `\q`                       | to quit                               |
| `createuser --interactive` | creating new role                     |
| `createdb newdb`           | creating a new database with name newdb |
