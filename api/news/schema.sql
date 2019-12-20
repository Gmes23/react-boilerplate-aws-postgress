/*
    This file does nothing, it simply use to reference
    how the database looks
*/


-- CREATE TABLE users (
--     uid SERIAL PRIMARY KEY,
--     username VARCHAR(255) UNIQUE,
--     email VARCHAR(255),
--     email_verified BOOLEAN,
--     date_created DATE,
--     last_login DATE
--   );
  
  
  CREATE TABLE products (
    pid SERIAL PRIMARY KEY,
    body VARCHAR,
    user_id INT REFERENCES users(id),
    date_created TIMESTAMP
  );

    --   like_user_id INT[] DEFAULT ARRAY[]::INT[],
    -- likes INT DEFAULT 0
  
--   CREATE TABLE comments (
--     cid SERIAL PRIMARY KEY,
--     comment VARCHAR(255),
--     author VARCHAR REFERENCES users(username),
--     user_id INT REFERENCES users(uid),
--     post_id INT REFERENCES posts(pid),
--     date_created TIMESTAMP
--   );