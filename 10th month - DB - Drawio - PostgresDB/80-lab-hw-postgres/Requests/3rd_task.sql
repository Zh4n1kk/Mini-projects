-- Третье задание

SELECT
	c.name AS course_name,
	COUNT(DISTINCT sg.student_id) AS total_qty
FROM
	student_groups sg
JOIN groups g ON sg.group_id = g.id
JOIN courses c ON g.course_id = c.id
WHERE
	sg.start_at BETWEEN '2025-07-01' AND '2025-07-31'
GROUP BY
	course_name
ORDER BY
	course_name;
