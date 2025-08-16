SELECT 
    CASE WHEN lvl = 1 THEN y::text ELSE '' END AS year,
    CASE WHEN lvl = 2 THEN m::text ELSE '' END AS month,
    CASE WHEN lvl = 3 THEN d::text ELSE '' END AS day,
    total
FROM (
    SELECT 
        EXTRACT(YEAR FROM action_date) AS y,
        NULL::numeric AS m,
        NULL::numeric AS d,
        SUM(qty * price) AS total,
        1 AS lvl
    FROM actions 
    GROUP BY EXTRACT(YEAR FROM action_date)

    UNION ALL

    SELECT 
        EXTRACT(YEAR FROM action_date),
        EXTRACT(MONTH FROM action_date),
        NULL::numeric,
        SUM(qty * price),
        2 AS lvl
    FROM actions
    GROUP BY EXTRACT(YEAR FROM action_date), EXTRACT(MONTH FROM action_date)

    UNION ALL

    SELECT 
        EXTRACT(YEAR FROM action_date),
        EXTRACT(MONTH FROM action_date),
        EXTRACT(DAY FROM action_date),
        SUM(qty * price),
        3 AS lvl
    FROM actions
    GROUP BY EXTRACT(YEAR FROM action_date), EXTRACT(MONTH FROM action_date), EXTRACT(DAY FROM action_date)
) AS data
ORDER BY y, m NULLS FIRST, lvl, d NULLS FIRST;