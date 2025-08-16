DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS teachers CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS course_teachers CASCADE;
DROP TABLE IF EXISTS course_students CASCADE;
DROP TABLE IF EXISTS lessons CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS student_groups CASCADE;

CREATE TABLE courses (
	id			SERIAL PRIMARY KEY,
	name		VARCHAR(150) NOT NULL
);

CREATE TABLE teachers (
	id			SERIAL PRIMARY KEY,
	full_name	VARCHAR(150) NOT NULL
);

CREATE TABLE students (
	id			SERIAL PRIMARY KEY,
	full_name	VARCHAR(150) NOT NULL
);

CREATE TABLE course_teachers (
	id			SERIAL PRIMARY KEY,
	course_id	INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
	teacher_id	INT NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
	CONSTRAINT uq_course_teachers UNIQUE (course_id, teacher_id)
);

CREATE TABLE course_students (
	id			SERIAL PRIMARY KEY,
	course_id	INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
	student_id	INT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
	CONSTRAINT uq_course_students UNIQUE (course_id, student_id)
);

CREATE TABLE lessons (
	id			SERIAL PRIMARY KEY,
	course_id	INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
	student_id	INT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
	teacher_id	INT NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
	start_at 	TIMESTAMP NOT NULL,
	end_at		TIMESTAMP NOT NULL,
	CONSTRAINT chk_lesson_date CHECK (start_at < end_at)
);

CREATE TABLE groups (
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(150) NOT NULL,
  course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE student_groups (
  id         SERIAL PRIMARY KEY,
  group_id   INT NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  student_id INT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  start_at   DATE NOT NULL,
  end_at     DATE,
  status     VARCHAR(20) NOT NULL  -- 'active' | 'finished' | 'dropped'
);

INSERT INTO courses (name) VALUES ('AJS-22'),('ACS-02');
INSERT INTO teachers (full_name) VALUES ('Ыскаков Жанибек'),('Мейн-Либен Беп');
INSERT INTO students (full_name) VALUES ('Нурлан Бобуров'),('Яша Плова'),('Ясос Убибу');
INSERT INTO course_teachers (course_id, teacher_id) VALUES (1,1),(1,2),(2,2);
INSERT INTO course_students (course_id, student_id) VALUES (1,1),(1,2),(2,3);
INSERT INTO lessons (course_id, student_id, teacher_id, start_at, end_at)
	VALUES 
		(1,1,1,'2025-07-08 19:30','2025-07-08 21:30'),
		(1,2,2,'2025-07-08 19:30','2025-07-08 21:30'),
		(2,3,2,'2025-07-08 16:30','2025-07-08 18:30');

INSERT INTO groups (name, course_id) VALUES ('AJS-22',1),('AJS-21',1),('ACS-20',2);

INSERT INTO student_groups (group_id, student_id, start_at, end_at, status) VALUES
  (1,1,'2025-07-01',NULL,'active'),
  (1,2,'2025-07-01','2025-07-20','dropped'),
  (2,2,'2025-07-25',NULL,'active'),
  (3,3,'2025-07-03',NULL,'active');