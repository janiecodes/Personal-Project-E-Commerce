DELETE FROM cart
WHERE product_id = $1;

SELECT * FROM cart ORDER BY product_id;