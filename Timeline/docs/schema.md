# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
avatar          | several   |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
body        | string    | not null
pic         | several   |

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
friend_id   | integer   | not null, foreign key
