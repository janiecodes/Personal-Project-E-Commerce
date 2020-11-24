INSERT INTO cart
(user_id, product_id, quantity)
VALUES
($1, $2, 1);

SELECT * FROM cart ORDER BY product_id;