import pool from "./pool.js";


async function initializeUsers() {
    const check = await pool.query(`
        SELECT EXISTS (
            SELECT 1
            FROM information_schema.tables
            WHERE table_schema = 'public'
                AND table_name = 'users'
        );
        `);

    if (!check.rows[0].exists) {
        console.log("users table doesn't exist, creating now");
    }

    const tableCreated = await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            first_name TEXT,
            last_name TEXT,
            username TEXT,
            password_hash TEXT,
            salt TEXT
        )
        `);
}

/*
===== EXAMPLE FUNCTION =======================
async function getAllPosts() {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}
*/

export default { initializeUsers };
