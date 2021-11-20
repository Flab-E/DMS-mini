Create Database CollegeDB;

CREATE TABLE Stream
(
  Name varchar(50) NOT NULL,
  Code char(3) NOT NULL,
  UG_PG char(2),
  Years int NOT NULL check (years < 6),
  PRIMARY KEY (Code),
  UNIQUE (Name)
);

CREATE TABLE Student
(
  Name varchar(20) NOT NULL,
  PRN char(9) NOT NULL,
  SRN INT NOT NULL,
  SEM INT NOT NULL check (sem <= 8),
  CGPA DECIMAL NOT NULL check (cgpa <= 10.0),
  SGPA DECIMAL NOT NULL check (sgpa <= 10.0),
  Stream char(3) NOT NULL,
  PRIMARY KEY (PRN),
  UNIQUE (SRN),
  FOREIGN KEY (Stream) REFERENCES Stream(Code)
);

CREATE TABLE Faculty
(
  Name varchar(20) NOT NULL,
  USN char(8) NOT NULL,
  PRIMARY KEY (USN)
);

CREATE TABLE Course
(
  Semester INT NOT NULL,
  Name varchar(50) NOT NULL,
  Code char(8) NOT NULL,
  Stream char(3) NOT NULL,
  PRIMARY KEY (Code),
  FOREIGN KEY (Stream) REFERENCES Stream(Code)
);

CREATE TABLE Certificate
(
  Stu_Name varchar(20) NOT NULL,
  Certification varchar(40) NOT NULL,
  Year DATE,
  Stu_PRN char(9) NOT NULL,
  PRIMARY KEY (Stu_PRN),
  FOREIGN KEY (Stu_PRN) REFERENCES Student(PRN)
);

CREATE TABLE Mentor_System
(
  Section char NOT NULL,
  Faculty varchar(20) NOT NULL,
  Fac_USN char(8) NOT NULL,
  Student varchar(20) NOT NULL,
  Stu_PRN char(9) NOT NULL,
  PRIMARY KEY (Fac_USN),
  UNIQUE (STU_PRN),
  FOREIGN KEY (Stu_PRN) REFERENCES Student(PRN),
  FOREIGN KEY (Fac_USN) REFERENCES Faculty(USN)
);

CREATE TABLE Library
(
  Author varchar(20),
  Name varchar(30) NOT NULL,
  Book_Code INT NOT NULL,
  Course_Code char(8) NOT NULL,
  PRIMARY KEY (Book_Code),
  FOREIGN KEY (Course_Code) REFERENCES Course(Code)
);

CREATE TABLE Studies
(
  PRN char(9) NOT NULL,
  Code char(3) NOT NULL,
  PRIMARY KEY (PRN, Code),
  FOREIGN KEY (PRN) REFERENCES Student(PRN),
  FOREIGN KEY (Code) REFERENCES Stream(Code)
);

CREATE TABLE Enrolled_In
(
  PRN char(9) NOT NULL,
  Code char(8) NOT NULL,
  PRIMARY KEY (PRN, Code),
  FOREIGN KEY (PRN) REFERENCES Student(PRN),
  FOREIGN KEY (Code) REFERENCES Course(Code)
);

CREATE TABLE Teaches
(
  USN char(9) NOT NULL,
  Code char(8) NOT NULL,
  PRIMARY KEY (USN, Code),
  FOREIGN KEY (USN) REFERENCES Faculty(USN),
  FOREIGN KEY (Code) REFERENCES Course(Code)
);

CREATE TABLE Student_Course
(
  Course_Code char(8) NOT NULL,
  PRN char(9) NOT NULL,
  PRIMARY KEY (Course_Code, PRN),
  FOREIGN KEY (PRN) REFERENCES Student(PRN),
  FOREIGN KEY (Course_Code) REFERENCES Course(Code)
);

CREATE TABLE Student_Contact
(
  Contact INT NOT NULL,
  EMAIL varcahr(30),
  PRN char(9) NOT NULL,
  PRIMARY KEY (Contact, PRN),
  FOREIGN KEY (PRN) REFERENCES Student(PRN)
);

CREATE TABLE Degree_Degree
(
  Degree varchar(30) NOT NULL,
  Stu_PRN char(9) NOT NULL,
  PRIMARY KEY (Degree, Stu_PRN),
  FOREIGN KEY (Stu_PRN) REFERENCES Certificate(Stu_PRN)
);

CREATE TABLE Faculty_Contact
(
  Contact INT NOT NULL,
  email varchar(40),
  USN char(8) NOT NULL,
  PRIMARY KEY (email),
  FOREIGN KEY (USN) REFERENCES Faculty(USN)
);
