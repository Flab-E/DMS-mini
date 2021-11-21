
const express = require("express");
const pool = require("./db");
const app = express();

app.use(express.json())

// ROUTES
app.get("/students", async (req, res) => {
    try {
        //await
        const allStudents = await pool.query("SELECT * FROM student;");
        res.json(allStudents.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/faculty", async (req, res) => {
    try {
        //await
        const allFaculty = await pool.query("SELECT * FROM faculty;");
        res.json(allFaculty.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/courses", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM course;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})

