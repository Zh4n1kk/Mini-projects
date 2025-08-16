-- Четвертое задание

SELECT
	g.name AS group_name,
	COUNT(DISTINCT sg.student_id) AS total_qty
FROM
	student_groups sg
JOIN groups g ON sg.group_id = g.id
JOIN courses c ON g.course_id = c.id
WHERE
	c.name = 'AJS-22'
	AND sg.start_at BETWEEN '2025-07-01' AND '2025-07-31'
GROUP BY
	group_name
ORDER BY
	group_name;
	