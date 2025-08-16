-- Первое задание

SELECT
	PRODUCT,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'IN'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'

	-- Указанный склад
	AND A.WAREHOUSE_ID = 1
GROUP BY product
ORDER BY product;

-- Второе задание

SELECT
	PRODUCT,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'OUT'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'
	
	-- Указанный склад
	AND A.WAREHOUSE_ID = 1
GROUP BY product
ORDER BY product;


-- Третье задание
SELECT
	CATEGORY,
	SUM(QTY) AS total_qty
FROM
	ACTIONS A
	JOIN PRODUCTS P ON A.PRODUCT_ID = P.ID
	JOIN CATEGORIES C ON P.CATEGORY_ID = C.ID
WHERE
	A.ACTION_TYPE = 'IN'
	AND A.WAREHOUSE_ID = 1
	AND A.DATE BETWEEN '2025-03-12' AND '2026-05-12'
GROUP BY CATEGORY
ORDER BY CATEGORY;

-- Четвертое задание 

	-- не получится, я не добавил таблицу brands

-- Пятое задание

SELECT p.product,
	SUM(CASE 
	WHEN a.action_type IN ('IN','MOVED_IN') THEN a.qty
	WHEN a.action_type IN ('OUT','MOVED_OUT') THEN -a.qty
	END) AS total_qty
FROM actions a
JOIN products p ON a.product_id = p.id
WHERE a.warehouse_id = 2
	AND a.date <= '2025-07-30'
GROUP BY product
HAVING SUM(CASE 
	WHEN a.action_type IN ('IN','MOVED_IN') THEN a.qty
	WHEN a.action_type IN ('OUT','MOVED_OUT') THEN -a.qty
	END) <> 0
ORDER BY product;

-- Шестое задание

SELECT
	PRODUCT,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'IN'
	AND a.date BETWEEN '2022-03-12' AND '2024-05-12'
	
	-- Указанный контрагент
	AND A.COUNTERAGENT_ID = 2
GROUP BY product
ORDER BY product;


-- Седьмое задание

SELECT
	PRODUCT,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'IN'
	AND a.date BETWEEN '2022-03-12' AND '2024-05-12'
	
	-- Указанный контрагент
	AND A.COUNTERAGENT_ID = 2

	-- Указанный склад
	AND A.WAREHOUSE_ID = 2
GROUP BY product
ORDER BY product;

-- Восьмое задание

SELECT
	PRODUCT,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'OUT'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'
	
	-- Указанный контрагент
	AND A.COUNTERAGENT_ID = 2

	-- Указанный склад
	AND A.WAREHOUSE_ID = 2
GROUP BY product
ORDER BY product;


-- Девятое задание

SELECT
	c.counteragent,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN counteragents c on a.counteragent_id = c.id
WHERE a.action_type = 'IN'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'
	
	-- Указанный продукт
	AND a.product_id = 1
	
GROUP BY c.counteragent
ORDER BY total_qty DESC;


-- Десятое задание

SELECT
	c.counteragent,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN counteragents c on a.counteragent_id = c.id
WHERE a.action_type = 'OUT'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'
	
	-- Указанный продукт
	AND a.product_id = 1
	
GROUP BY c.counteragent
ORDER BY total_qty DESC;


-- Одинадцатое задание

SELECT
	p.PRODUCT,
	SUM(QTY) as total_qty
FROM
	ACTIONS A
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'MOVED_IN'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'

	-- Указанный склад
	AND A.WAREHOUSE_ID = 1
GROUP BY product
ORDER BY product;


-- Двенадцатое задание

SELECT
	p.product,
	SUM(qty) as total_qty
FROM
	actions a
JOIN products p on a.product_id = p.id
WHERE a.action_type = 'MOVED_OUT'
	AND a.date BETWEEN '2022-03-12' AND '2026-05-12'

	-- Указанный склад
	AND A.WAREHOUSE_ID = 1
GROUP BY product
ORDER BY product;