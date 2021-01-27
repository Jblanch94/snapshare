-- Create table for users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(30) NOT NULL,
  img VARCHAR(500) DEFAULT ''
);

-- Create table for posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(240) NOT NULL,
  description VARCHAR(500) NOT NULL,
  img VARCHAR(500) NOT NULL
  user_id INTEGER NOT NULL REFERENCES users(id)
);

-- Create table for tags
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  title VARCHAR(20) NOT NULL
);

-- Create table for junction table between tags and posts
CREATE TABLE posts_tags (
  post_id INTEGER NOT NULL REFERENCES posts(id),
  tag_id INTEGER NOT NULL REFERENCES tags(id)
);

-- Create table for favorites
CREATE TABLE favorites (
  post_id INTEGER NOT NULL REFERENCES posts(id),
  user_id INTEGER NOT NULL REFERENCES users(id)
);

-- Create table for comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  contents VARCHAR(800) NOT NULL,
  post_id INT NOT NULL REFERENCES posts(id),
  user_id INT NOT NULL REFERENCES users(id)
);

-- Create table for albums
CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(50) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id)
);

-- Create junction table between albums and posts
CREATE TABLE albums_posts (
  post_id INTEGER NOT NULL REFERENCES posts(id),
  album_id INTEGER NOT NULL REFERENCES albums(id)
);

-- Create table for upvotes
CREATE TABLE upvotes (
  post_id INTEGER NOT NULL REFERENCES posts(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  UNIQUE(post_id, user_id)
);