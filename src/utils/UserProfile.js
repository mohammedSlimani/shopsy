//In this file we save the user info in the cookie.

let UserProfile = (function () {
    let user = null;

    const getUser = async () => {
        //Get the user from the LocalStorage
        user = await JSON.parse(localStorage.getItem("user")) ;
        return user;
    }

    const setUser = (new_user) => {
        //saving this to the LocalStorage
        localStorage.setItem("user",JSON.stringify(new_user));
        user = new_user;
    }

    return {
        getUser,
        setUser
    }
})();

export default UserProfile;