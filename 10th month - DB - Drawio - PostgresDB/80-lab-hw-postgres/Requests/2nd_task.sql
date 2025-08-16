-- Второе задание

SELECT
	c.name AS course_name,
	COUNT(*) AS total_qty,
	g.name AS group_name
FROM
	student_groups sg
JOIN groups g ON sg.group_id = g.id
JOIN courses c ON g.course_id = c.id
WHERE
	c.name = 'AJS-22'
	AND sg.status = 'dropped'
	AND sg.end_at BETWEEN '2025-07-01' AND '2025-07-31'
GROUP BY
	course_name, group_name
ORDER BY
	group_name;
