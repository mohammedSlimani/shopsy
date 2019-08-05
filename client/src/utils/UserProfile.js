//In this file we save the user info in the cookie.

let UserProfile = (function () {
    const user = null;

    const getUser = () => {
        //Get the user from the Cookie
        return user;
    }

    const setUser = (new_user) => {
        //saving this to the cookie
        user = new_user;
    }

    return {
        getUser,
        setUser
    }
})();