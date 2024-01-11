import Shimmer from "./shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.js";
//named import

const RestaurantMenu = () =>{
 
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo==null) return <Shimmer/>

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const catagories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p className="font-bold text-lg">{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
            {catagories.map((category) => <RestaurantCategory data={category?.card?.card} />)}
             
        </div>
    );
};
export default RestaurantMenu; 