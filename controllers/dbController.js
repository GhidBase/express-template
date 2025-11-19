import db from "../db/queries.js";

async function initializeUsers(req, res) {
    await db.initializeUsers();
}

export default { initializeUsers };
