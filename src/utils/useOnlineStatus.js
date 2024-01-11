import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    // check if online 
    // we'll use Event Listener (preBuilt in browser) 

    // add just once the Event Listener 

    // use useEffect() and make dependency []

    useEffect(()=>{

        window.addEventListener("offline", ()=>{
            //if offline, then condition -> change state variable 
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            //if online, then condition -> change state variable 
            setOnlineStatus(true);
        });


    },[]);


    //boolean value 


    return onlineStatus;
}

export default useOnlineStatus;