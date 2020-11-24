SELECT c*
FROM cart c
JOIN products p 
ON p.product_id = c.product_id
WHERE u.user_id = $1;