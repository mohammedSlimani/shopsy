//This is where we handle the Sign in and sign up stuff

const Models = require('./models');

const singIn = ( email, password ) =>{
    Models
    .User
    .findOne({email:email})
    .exec( ( err, user )=>{
        if(err){
            console.log('err finding the user');
            return null;
        }
        else if(user.password !== Hash(password)){
            console.log('found user, Wrong password');
            return null;
        }else{
            return user;
        }
    })
}

const Hash = ( pass ) =>{
    //This method is going to hash the passwords
    return pass
}