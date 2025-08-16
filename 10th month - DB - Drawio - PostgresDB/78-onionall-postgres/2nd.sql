SELECT
    CASE WHEN lvl = 1 THEN real_supplier ELSE '' END AS supplier,
    CASE WHEN lvl = 2 THEN year::text ELSE '' END AS year,
    CASE WHEN lvl = 3 THEN category ELSE '' END AS category,
    total
FROM (
    SELECT
        s.supplier AS real_supplier,
        NULL::int AS year,
        NULL::text AS category,
        SUM(a.qty * a.price) AS total,
        1 AS lvl
    FROM actions a
    JOIN suppliers s
      ON a.supplier_id = s.id
    GROUP BY s.supplier

    UNION ALL

    SELECT
        s.supplier AS real_supplier,
        EXTRACT(YEAR FROM a.action_date)::int AS year,
        NULL::text AS category,
        SUM(a.qty * a.price) AS total,
        2 AS lvl
    FROM actions a
    JOIN suppliers s
      ON a.supplier_id = s.id
    GROUP BY s.supplier,EXTRACT(YEAR FROM a.action_date)

    UNION ALL
	
    SELECT
        s.supplier AS real_supplier,
        EXTRACT(YEAR FROM a.action_date)::int AS year,
        c.category AS category,
        SUM(a.qty * a.price) AS total,
        3 AS lvl
    FROM actions a
    JOIN products p ON a.product_id = p.id
    JOIN suppliers s ON a.supplier_id = s.id
    JOIN categories c ON p.category_id = c.id
    GROUP BY s.supplier,EXTRACT(YEAR FROM a.action_date),c.category
) AS data
ORDER BY
    real_supplier,
    CASE WHEN lvl = 1 THEN -1 ELSE year END,
    lvl,
    category NULLS FIRST;