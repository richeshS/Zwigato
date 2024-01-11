import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Grocery from "./components/Grocery.js";
import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";
//import Cart from "./components/Cart.js";

import { Provider } from "react-redux";


const Grocery = lazy(() => import("./components/Grocery.js"));



const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const data = {
            name: "Richesh Sharma"
        };
        setUserInfo(data.name);
    },[]);
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
        
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/cart",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element:  <Suspense fallback={<h1>Take some deep breaths</h1>}><Grocery  /></Suspense>,
            },
            // {
            //     path: "/cart",
            //     elemrnt: <Cart />,
            // },
        ],
        errorElement: <Error />,
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
