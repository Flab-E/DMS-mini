const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'project',
    password: 'project',
    database: 'collegedb',
    host: 'localhost',
    port: 5432
})

module.exports = pool;