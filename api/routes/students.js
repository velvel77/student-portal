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

router.delete("/:id", async (req, res) =>{
const id = parseInt(req.params.id);

if (isNaN(id)){
     return res.status(400).json({error: "Ivalid ID (Not a number"});
}
try{
    const result = await pool.query(
        `DELETE FROM student WHERE id = $1 RETURNING *`, [id]
    );

    if(result.rowCount === 0){
        return res.status(400).json({error: "Student was not found"})
    }
    res.status(200).json(result.rows[0]);
} catch (err){
    console.error(err)

    res.status(500).send("Delete failed...")
}
});

export default router;