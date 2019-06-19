# Client Design DOC
The client is a single page application. 

## Technologies used
- React 
- React-bootstrap : cz I suck at styling
- Axios: More relaible way to call my API

## Architecture
A route that is going to choose between the components depending on conditions based on the state. For example:
- If not authenticated show the login and sign up forms.
- Else, show "some" shops ordered by the user position.
- When the user hits the "Favorite" button, then I'll show the favoriteShops Component. 
- I'll be calling and End point whenever the user hits the buttons like or dislike. And updating the list each time he does that. 
