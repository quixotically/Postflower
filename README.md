# Postflower
A social networking site that deletes your posts after a user-set amount of time. The default is one week.

[Live version](http://www.postflower.co/)

## Dependencies

## Configuration

## Database creation
Postflower uses PostgreSQL as its database.

## Automatic Deletion
I will need to set up PostgreSQL triggers every x amount of time (will start with every minute) in order to automatically delete posts. The only extra column needed is a deletion_time column, calculated using the timestamps column upon creation or edit. By indexing the deletion_time column, I can quickly look up the correct posts to delete. The actual job is easy - just compare to the current time to see if the deletion_time is equal to or preceding the current time.

## Performance
I indexed foreign keys for faster lookup.
