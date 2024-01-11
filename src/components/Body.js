import RestaurantCard, { withPromtedLabel} from "./RestaurantCard.js";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
 
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        // setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(resList);
        setFilteredRestaurants(resList);
    }
    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false) return <h1>Looks like you are offline!! Please check your internet connection....</h1>

    if(listOfRestaurants.length == 0){
        return <Shimmer />;
    }
        return (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 bg-red-200 m-4 rounded-lg" onClick={() => {
                        console.log(searchText);
                        const filteredRestaurants = 
                        // listOfRestaurants.filter((resList)=>resList.name == searchText);
                        listOfRestaurants.filter((resList)=>resList.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                        
                    }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-1 bg-red-100 rounded-lg" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter( (res) => res.avgRating > 4.5);
                    setFilteredRestaurants(filteredList);
                }}
                
                >
                    Top Rated Restaurants
                </button >
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant,index) => (
                    <Link key={index} to={"/restaurants/" + restaurant.id}
                    >
                        {
                            restaurant.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant}/>)
                        }
                        
                    </Link>
                ))}
                
            </div>
        </div>
    );
}
export default Body;