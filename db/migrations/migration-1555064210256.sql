DROP TABLE IF EXISTS stories;

CREATE TABLE IF NOT EXISTS stories (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  author VARCHAR(50)
);
