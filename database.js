const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "projectWad",
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createPostsTable = `
CREATE TABLE IF NOT EXISTS "posts" (
    userid integer NOT NULL, 
    createtime timestamp without time zone NOT NULL, 
    id SERIAL PRIMARY KEY NOT NULL, 
    likes integer DEFAULT 0, 
    body text NOT NULL);
    `;

execute(createPostsTable).then(result => {
    if (result) {
        console.log('posts table created!');
    }
});


const createUsersTable = `
CREATE TABLE IF NOT EXISTS "users" (
    id SERIAL PRIMARY KEY NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL);
    `;

execute(createUsersTable).then(result => {
    if (result) {
        console.log('users table created!');
    }
});





module.exports = pool;