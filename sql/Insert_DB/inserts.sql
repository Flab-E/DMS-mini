INSERT INTO stream
VALUES
    ('Computer Science Engineering', 'CSE', 'UG', 4),
    ('Electronics and Communication Engineering', 'ECE', 'UG', 4),
    ('Mechanical Engineering', 'MEC', 'UG', 4),
    ('Civil Engineering', 'CVE', 'UG', 4),
    ('Electonicx and Electrical Engineering', 'EEE', 'UG', 4),
    ('Communication Systems', 'COS', 'PG', 2),
    ('Computer Science and Engineering (MS)', 'CEM', 'PG', 2),
    ('Computer Technology', 'CTE', 'PG', 2),
    ('Mechanical Designing', 'MDE', 'PG', 2)
;


INSERT INTO student
VALUES
	('Revady Chakrabarti', 'STU1CS001', 201911001, 5, 8.9, 8.7, 'CSE'),
	('Roguiny Thakur', 'STU1CS002', 201911002, 5, 7.3, 8.8, 'CSE'),
	('Shiva Ganguly', 'STU1CS003', 201911003, 5, 9.4, 9.6, 'CSE'),
	('Usha Dara', 'STU1EC001', 201812001, 7, 7.6, 8.0, 'ECE'),
	('Parnita Sharma', 'STU1EC002', 201812002, 7, 6.9, 6.5, 'ECE'),
	('Chitra Bawa', 'STU1EC003', 201812003, 7, 9.9, 10.0, 'ECE'),
	('Venkat Rao', 'STU1ME001', 201913001, 5, 10.0, 10.0, 'MEC'),
	('Soudarmani Khurana', 'STU1ME002', 201813002, 7, 6.8, 7.0, 'MEC'),
	('Shanti Apte', 'STU1ME003', 201913003, 5, 7.8, 8.2, 'MEC'),
	('Sib Jha', 'STU1ME004', 201813004, 7, 9.2, 9.6, 'MEC')
;


INSERT INTO faculty
VALUES
    ('Sangita Grover', 'FAC13001'), 
    ('Jitender Agarwal', 'FAC17002'),
    ('Yashoda Seth', 'FAC17003'),
    ('Tangavel Chauha', 'FAC18004'),
    ('Isha Baby', 'FAC18005'),
    ('Sudarshan Mukherjee', 'FAC18006'),
    ('Yamini Malhotra', 'FAC19007'),
    ('Priya Ahluwalia', 'FAC20008'),
    ('Arundhati Jha', 'FAC20009')
;


INSERT INTO course
VALUES
    (5, 'Operating System', 'UE19CS01', 'CSE'),
    (7, 'Microprocessors', 'UE20CS02', 'CSE'),
    (5, 'Signals And Systems', 'UE19EC01', 'ECE'),
    (7, 'Digital Signal Processing', 'UE20EC02', 'ECE'),
    (5, 'Mechatronics', 'UE19ME01', 'MEC'),
    (7, 'Nanotechnology', 'UE20ME02', 'MEC'),
    (5, 'Data Structures and Algorithms', 'PG20CT01', 'CTE'),
    (7, 'Computer Networks', 'PG21CT02', 'COS')
;


INSERT INTO certificate
VALUES
    ('Revady Chakrabarti', '2019-01-01', 'STU1CS001', '12th Report'),
	('Roguiny Thakur', '2019-01-01', 'STU1CS002', '12th Report'),
	('Shiva Ganguly', '2019-01-01', 'STU1CS003', '12th Report'),
	('Usha Dara', '2018-01-01', 'STU1EC001', '12th Report'),
	('Parnita Sharma', '2018-01-01', 'STU1EC002', '12th Report'),
	('Chitra Bawa', '2018-01-01', 'STU1EC003', '12th Report'),
	('Venkat Rao', '2019-01-01', 'STU1ME001', '12th Report'),
	('Soudarmani Khurana', '2018-01-01', 'STU1ME002', '12th Report'),
	('Shanti Apte', '2019-01-01', 'STU1ME003', '12th Report'),
	('Sib Jha', '2018-01-01', 'STU1ME004', '12th Report')
;


INSERT INTO mentor_system
VALUES
    ('A', 'Sangita Grover', 'FAC13001', 'Roguiny Thakur', 'STU1CS002'),
	('A', 'Jitender Agarwal', 'FAC17002', 'Shiva Ganguly', 'STU1CS003'),
	('B', 'Yashoda Seth', 'FAC17003', 'Usha Dara', 'STU1EC001'),
	('B', 'Tangavel Chauha', 'FAC18004', 'Parnita Sharma', 'STU1EC002'),
	('C', 'Isha Baby', 'FAC18005', 'Chitra Bawa', 'STU1EC003'),
	('C', 'Sudarshan Mukherjee', 'FAC18006', 'Venkat Rao', 'STU1ME001'), 
	('D', 'Priya Ahluwalia', 'FAC19007', 'Soudarmani Khurana', 'STU1ME002'), 
	('D', 'Priya Ahluwalia', 'FAC20008', 'Shanti Apte', 'STU1ME003'),
	('D', 'Arundhati Jha', 'FAC20009', 'Sib Jha', 'STU1ME004')
;


INSERT INTO library
VALUES
	('Greg Tomsho', 'Guide to Operating Systems', 15001, 'UE19CS01'),
	('David Money Harris', 'Digital Design and Computer Architecture', 15002, 'UE20CS02'), 
	('Alan V. Oppenheim', 'Signals and Systems', 16001, 'UE19EC01'), 
	('C Ramesh Babu Durai', 'Digital Signal Processing', 16002, 'UE20EC02'), 
	('Jan Awrejcewicz', 'Automative Mechatronics', 17001, 'UE19ME01'), 
	('B. S. Shankar', 'Nanoscience and Nanotechnology', 17002, 'UE20ME02'), 
	('Thomas H. Cormen', 'Algorithms Unlocked', 18001, 'PG20CT01'), 
	('Andrew S. Tanenbaum', 'Computer Networks', 18002, 'PG21CT02')
;


INSERT INTO studies
VALUES
	('STU1CS001', 'CSE'),
	('STU1CS002', 'CSE'),
	('STU1CS003', 'CSE'),
	('STU1EC001', 'ECE'),
	('STU1EC002', 'ECE'),
	('STU1EC003', 'ECE'),
	('STU1ME001', 'MEC'),
	('STU1ME002', 'MEC'),
	('STU1ME003', 'MEC'),
	('STU1ME004', 'MEC')
;


INSERT INTO enrolled_in
VALUES
    ('STU1CS001', 'UE19CS01'),
	('STU1CS002', 'UE19CS01'),
	('STU1CS003', 'UE19CS01'),
	('STU1EC001', 'UE20EC02'),
	('STU1EC002', 'UE20EC02'),
	('STU1EC003', 'UE19EC01'),
	('STU1ME001', 'UE20ME02'),
	('STU1ME002', 'UE20ME02'),
	('STU1ME003', 'UE20ME02'),
	('STU1ME004', 'UE20ME02')
;


INSERT INTO teaches
VALUES
	('FAC13001', 'UE19CS01'),
	('FAC17002', 'UE20CS02'),
	('FAC17003', 'UE19EC01'),
	('FAC18004', 'UE20EC02'),
	('FAC18005', 'UE19ME01'),
	('FAC18006', 'UE20ME02'),
	('FAC19007', 'PG20CT01'),
	('FAC20008', 'PG21CT02')
;


INSERT INTO student_contact
VALUES

;


INSERT INTO faculty_contact
VALUES

;
