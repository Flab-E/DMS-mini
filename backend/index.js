const cors = require("cors");
const express = require("express");
const pool = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res_txt = '/student<br>'+
              '/faculty<br>'+
              '/courses<br>'
    res.send(res_txt)
})

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

app.get("/certificate", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM certificate;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/degree_degree", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM degree_degree;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/enrolled_in", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM enrolled_in;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/faculty", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM faculty;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/faculty_contact", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM faculty_contact;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/library", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM library;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/mentor_system", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM mentor_system;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/stream", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM stream;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/student_contact", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM student_contact;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/student_course", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM student_course;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/studies", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM studies;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/teaches", async (req, res) => {
    try {
        //await
        const allCourses = await pool.query("SELECT * FROM teaches;");
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})

