SELECT
	s.supplier
FROM
	suppliers s
WHERE 
	(
		SELECT SUM(a.qty * a.price)
		FROM actions a
		WHERE a.supplier_id = s.id
		AND EXTRACT(YEAR FROM a.action_date) = 2016
	) > (
	SELECT SUM(a2.qty * a2.price)
	FROM actions a2
	JOIN suppliers s2 ON a2.supplier_id = s2.id
	WHERE
		s2.supplier = 'IDT' AND
		EXTRACT(YEAR FROM a2.action_date) = 2016
	)