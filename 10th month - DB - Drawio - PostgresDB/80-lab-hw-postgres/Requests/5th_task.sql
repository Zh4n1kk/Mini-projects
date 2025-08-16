-- Пятое задание

SELECT
	g.name AS group_name,
	COUNT(DISTINCT sg.student_id) AS total_qty
FROM
	student_groups sg
JOIN groups g ON sg.group_id = g.id
WHERE
	g.name = 'AJS-22'
	AND sg.start_at <= '2025-07-30'
	AND (sg.end_at IS NULL OR sg.end_at > '2025-07-30')
	AND sg.status = 'active'
GROUP BY
	group_name
ORDER BY
	group_name;
