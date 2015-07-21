# Postflower
A social networking site that deletes your posts after a user-set amount of time. The default is one week.

[Live version](http://www.postflower.co/)

## Dependencies
I used the backbone-on-rails gem for setting up the javascript directory structure, generating basic boilerplate code, and serving backbone.js and underscore.js. The terminal command for setting up the Backbone and its javascript directory structure is
```
rails generate backbone:install --javascript
```
and the command for generating scaffolds for models is
```
rails generate backbone:scaffold ModelName --javascript
```
These commands generate the boilerplate code needed for Backbone.

## Configuration

## Database creation
Postflower uses PostgreSQL as its database.

## Automatic Deletion
I will need to set up PostgreSQL triggers every x amount of time (will start with every minute) in order to automatically delete posts. The only extra column needed is a deletion_time column, calculated using the timestamps column upon creation or edit. By indexing the deletion_time column, I can quickly look up the correct posts to delete. The actual job is easy - just compare to the current time to see if the deletion_time is equal to or preceding the current time.

## Performance
I indexed foreign keys for faster lookup.

## Utils
I used a namespaced ```_flashMessage``` function to handle flash messages. When I want to create a message, I feed the function the message and the type (error or success) to display the message in a popup container with the appropriate text and coloring.
