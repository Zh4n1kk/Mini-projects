SELECT
	a.id,
	a.action_date,
	p.product,
	s.supplier,
	a.qty,
	a.price
FROM
	actions a
JOIN products p ON a.product_id = p.id
JOIN suppliers s ON a.supplier_id = s.id
JOIN categories c on p.category_id = c.id
WHERE EXTRACT(YEAR FROM a.action_date) = 2017 AND c.category = 'Monitors'
ORDER BY QTY DESC
LIMIT 55