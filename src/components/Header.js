import { Logo_url } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {

    // let btnName = "Login";

    const[btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    const onlineStatus = useOnlineStatus();

    //const data = useContext(UserContext);
   
    const {loggedInUser} = useContext(UserContext);
    //useContext to use it from anywhere 

    //subscribing to the store using selector 
    const cartItems = useSelector((store)=> (store.cart.items));
    console.log(cartItems);
    //cart will get the data of these items 

    // console.log(data);
    return (
        <div className="flex justify-between bg-red-200 shadow-lg m-2">
            <div className="logo-container">
                <Link to="/"><img className="w-56" src={Logo_url} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <button className="font-bold text-lg px-4" onClick={()=>{
                        btnNameReact=="Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login");    
                    }}>{btnNameReact}</button>
                    
                    <li className="px-4 text-lg">
                    <Link to="/">
                    Home
                    </Link>
                    </li>
                    <li className="px-4 text-lg"><Link to="/about">About Us</Link></li>
                    
                    {/* <li className="px-4">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li> */}
                    {/* <li className="px-4 font-bold text-xl">
                    <Link to="/cart">
                    Cart - ({cartItems.length} items)
                    </Link>
                    </li> */}
                   
                    
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">
                    Cart ({cartItems.length} items)
                    </Link>
                    </li>
                </ul> 
            </div>

        </div>
    );
};

export default Header;
 