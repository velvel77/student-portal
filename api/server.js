import express from "express";
import { pool } from "./db.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/students", async (req, res) => {
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

app.post("/students", async (req, res) => {
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

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
