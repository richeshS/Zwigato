import { createContext } from "react";

const UserContext =  createContext({
    loggedInUser:"Default User",
});

export default UserContext;

//access this anywhere in my app 