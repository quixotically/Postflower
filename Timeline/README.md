# Postflower
[Live link](http://www.postflower.co/)

## Minimum Viable Product
Postflower is a social networking site built on Rails and Backbone. Users can:
- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create posts that delete automatically
- [ ] Edit profile
- [ ] Edit posts
- [ ] Search for friends
- [ ] Search for your own posts
- [ ] View feed of friends' posts

## Design Docs
* [DB schema][schema]

[schema]: ./Timeline/docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and Mockup Profiles
I will implement user authentication in Rails and Backbone, using API routes to serve data as JSON. I will add Backbone models and collections that fetch data from those routes. By the end of this phase, users will be able to create an account, log in, and view on outline of their profiles.

[Details][phase-one]

### Phase 2: Post Creation and Auto-deletion
Users will be able to create and view posts, all inside a single Backbone app. Posts will be deleted automatically after 10 secs, for testing purposes. This will require running a PostgreSQL job every 10 secs.

[Details][phase-two]

### Phase 3: Editing Profiles and Posts
I plan to use third-party libraries to integrate article photos into posts. I will use Filepicker for file upload so users can add images to their profiles as well as their posts.

[Details][phase-three]

### Phase 4: Friendships
I'll need to create a Friendships controller and possibly a FriendRequest model to enable users to request and have mutual friendships. Since friends are other users, I'll need self-referential associations in the User Rails model.

[Details][phase-four]

### Phase 5: User Feeds
I'll start by adding a feed route that uses the current_user's friends association to serve a list of their posts ordered chronologically. On the Backbone side, I'll make a FeedShow view whose posts collection fetches from the new route. Ultimately, this will be the page users see after logging in.

[Details][phase-five]

### Phase 6: Searching for Friends and Current User's Posts
I'll need to add search routes to both the Users and Posts controllers. On the Backbone side, there will be FriendSearchResults and PostSearchResults views. These views will use plain old users and posts collections, but they will fetch from the new search routes.

[Details][phase-six]

### Bonus Features (TBD)
- [ ] "Like" button and counter for posts
- [ ] Comments
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
- [ ] Oauth
- [ ] Typeahead search bar
- [ ] Implement with React
- [ ] Implement with NoSQL

[phase-one]: ./Timeline/docs/phases/phase1.md
[phase-two]: ./Timeline/docs/phases/phase2.md
[phase-three]: ./Timeline/docs/phases/phase3.md
[phase-four]: ./Timeline/docs/phases/phase4.md
[phase-five]: ./Timeline/docs/phases/phase5.md
[phase-six]: ./Timeline/docs/phases/phase6.md
