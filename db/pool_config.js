const { Pool } = require('pg');

const pool = new Pool({
    user: 'thuandang',
    // password: 'password',
    host: 'localhost',
    // port: 5434,
    database: 'fce'
})

module.exports = pool