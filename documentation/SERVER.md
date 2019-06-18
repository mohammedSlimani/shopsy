# SERVER DESIGN DOC:

## Technologies used
- NodeJS
- ExpressJS
- Mongoose

## Routes:
| ROUTE | Description |
| --- | --- |
|/api/shops| To get all the shops|
|api/users/sign-in|post route to sign in a user|
|/api/users/sign-up|post route to sign up a user|
|/api/users/:id_user/shops|To get the prefered shops for a user|
|/api/users/:id_user/like/:id_shop|To add the liked shop to the prefered ones|
|/api/users/:id_user/dislike/:id_shop|To remove  shop from the prefered ones|

## Database
There are two data Collections
* Shops : Imported from the bson file of the challenge and has the following fields:
    * id 
    * picture
    * name
    * email
    * city 
    * location

* users : 
    * id : auto generated
    * email : unique
    * password : Should be salted and hashed.
    * prefered : List of reference to the prefered shops
