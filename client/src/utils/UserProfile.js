//In this file we save the user info in the cookie.

let UserProfile = (function () {
    let user = null;

    const getUser = async () => {
        //Get the user from the LocalStorage
        user = await JSON.parse(localStorage.getItem("user")) ;
        console.log("Getting the user form the locaStorage");
        console.log(user);
        return user;
    }

    const setUser = (new_user) => {
        //saving this to the cookie
        console.log("saving the user");
        console.log(new_user);
        localStorage.setItem("user",JSON.stringify(new_user));
        user = new_user;
    }

    return {
        getUser,
        setUser
    }
})();

export default UserProfile;