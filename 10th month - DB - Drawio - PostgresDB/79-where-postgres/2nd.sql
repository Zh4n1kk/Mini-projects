SELECT
	PRODUCT
FROM
	PRODUCTS P
WHERE
	p.id NOT IN (
	SELECT a.product_id
	FROM actions a
	JOIN suppliers s ON a.supplier_id = s.id
	WHERE s.supplier = 'IDT'
	)