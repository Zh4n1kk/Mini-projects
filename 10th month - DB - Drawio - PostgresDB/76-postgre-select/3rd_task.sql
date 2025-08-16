SELECT DISTINCT products.product, action_date
FROM actions
INNER JOIN products ON actions.product_id = products.id
WHERE EXTRACT(YEAR FROM actions.action_date) = 2017
ORDER BY products.product;