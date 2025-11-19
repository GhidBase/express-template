import pool from "./pool.js";

async function returnTest() {
    console.log("test");
    return "test";
}

/*
===== EXAMPLE FUNCTION =======================
async function getAllPosts() {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}
*/

export default { returnTest };
