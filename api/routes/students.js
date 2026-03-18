import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM student ORDER BY id ASC",
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

router.post("/", async (req, res) => {
	const { name, portfolio_link, tech_stack, picture, bio } = req.body;

	try {
		const result = await pool.query(
			`INSERT INTO student (name, portfolio_link, tech_stack, picture, bio)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
			[name, portfolio_link, tech_stack, picture, bio],
		);

		res.json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).send("Insert failed");
	}
});

export default router;