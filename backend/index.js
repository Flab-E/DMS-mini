const cors = require("cors");
const express = require("express");
const pool = require("./db");
const app = express();
const cookieParser = require('cookie-parser'); // in order to read cookie sent from client

app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {


    // read cookies
    console.log(req.cookies) 

    let options = {
        maxAge: 1000 * 60 * 3600, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
    }

    // Set cookie
    

    res_txt = '/student<br>'+
              '/faculty<br>'+
              '/courses<br>';
    res.send(res_txt)
})

app.post('/login', async (req, res) => {
    // Insert Login Code Here
    username = req.body['username'];
    password = req.body['password'];
    console.log(username, password);
    if(username === 'admin' && password === 'admin')
    {
        res.cookie('user', 'admin');
        res.json({ok: true});
    }

    else{
        const creds = await pool.query(`SELECT * FROM STUDENT WHERE NAME = '${username}' and PRN = '${password}';`);
        if (creds.rowCount>0){
            res.cookie('user','student');
            res.json({ok: true});
        }
        else{
            res.json({'ok': false});
        }
    }
  });

app.post("/studentAdd", async (req, res) => {
    try {
        const params = req.body;
        const studentTable = await pool.query(
            `Insert into Student Values('${params['name']}', '${params['prn']}', ${params['srn']}, ${params['sem']}, ${params['cgpa']}, ${params['sgpa']}, '${params['stream']}');`
        )

        const certiTable = await pool.query(
            `Insert into certificate Values('${params['name']}', '${params['certificate_date']}', '${params['prn']}', '${params['certificate']}');`
        )

        const mentorTable = await pool.query(
            `Insert into mentor_system Values('${params['section']}', '${params['mentor_name']}', '${params['mentor_usn']}', '${params['name']}', '${params['prn']}');`
        )

        const contactTable = await pool.query(
            `Insert into student_contact Values(${params['contact_no']}, '${params['email']}', '${params['prn']}');`
        )

        res.json({ok: "ok"})
    } catch (err) {
        console.log("Oops! something went wrong!", err)
    }
})

app.get("/certificate/:prn", async (req, res) => {
    try {
        const { prn } = req.params;
        console.log(prn);
        const certi = await pool.query(`Select * from certificate where stu_prn='${prn}';`);
        res.json(certi.rows);
    } catch (err) {
        console.log("opps something went wrong /singleStudent", err)
    }
});

app.get("/course/:prn", async (req, res) => {
    try {
        const { prn } = req.params;
        console.log(prn);
        const certi = await pool.query(`Select * from course where stream=(Select code from studies where prn='${prn}') and semester=(Select sem from student where prn='${prn}');`);
        res.json(certi.rows);
    } catch (err) {
        console.log("opps something went wrong /singleStudent", err)
    }
});

app.get("/mentor/:prn", async (req, res) => {
    try {
        const { prn } = req.params;
        console.log(prn);
        const mentor = await pool.query(`Select * from mentor_system where stu_prn='${prn}';`);
        res.json(mentor.rows);
    } catch (err) {
        console.log("opps something went wrong /singleStudent", err)
    }
});

app.get("/teaches/:usn", async (req, res) => {
    try {
        const { usn } = req.params;
        console.log(usn);
        const teaches = await pool.query(`Select * from teaches where usn='${usn}';`);
        res.json(teaches.rows);
    } catch (err) {
        console.log("opps something went wrong /singleStudent", err)
    }
});

app.get("/facContact/:usn", async (req, res) => {
    try {
        const { usn } = req.params;
        console.log(usn);
        const contact = await pool.query(`Select * from faculty_contact where usn='${usn}';`);
        res.json(contact.rows);
    } catch (err) {
        console.log("opps something went wrong /singleStudent", err)
    }
});

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

