SELECT DISTINCT supplier,category from actions a
JOIN suppliers s ON a.supplier_id = s.id
JOIN products p on a.product_id = p.id
JOIN categories c on p.category_id = c.id
WHERE
	S.SUPPLIER = 'IDT'
	AND EXTRACT(
		YEAR
		FROM
			A.ACTION_DATE
	) = 2016
	AND EXTRACT(
		MONTH
		FROM
			A.ACTION_DATE
	) IN (6,
	7,
	8);