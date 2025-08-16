-- Первое задание

SELECT
	COUNT(DISTINCT sg.student_id) AS student_count,
	c.name AS course_name,
	g.name AS group_name
FROM
	student_groups sg
JOIN groups g ON sg.group_id = g.id
JOIN courses c ON g.course_id = c.id
WHERE
	c.name = 'AJS-22'
	AND sg.start_at <= '2025-07-31'
	AND (sg.end_at IS NULL OR sg.end_at >= '2025-07-01')
GROUP BY
	course_name, group_name
ORDER BY
	group_name;
