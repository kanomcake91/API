const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
});

// const pool = new Pool({
//   user: "manalab",
//   host: "35.247.188.203",
//   database: "manalab",
//   password: "zxc123**",
//   port: 5432,
// });

async function getAllPost() {
    const sql = `select * from post_mana limit 20`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getPostById(id) {
    const sql = `select * from post_mana where id = ${id}`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getPostByShortcode(shortcode) {
    const sql = `select * from post_mana where shortcode = '${shortcode}'`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function insertPost(post) {
    const sql = `INSERT INTO public.post_mana
              (shortcode, full_name, username, location_id, location_name, like_count, taken_at_timestamp, caption_text, id)
              VALUES('${post.shortcode}', '${post.full_name}', '${post.username}', '${post.location_id}', '${post.location_name}', 
                ${post.like_count},${post.taken_at_timestamp}, '${post.caption_text}', ${post.id});`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {
    getAllPost,
    getPostById,
    getPostByShortcode,
    insertPost,
};