import { CDN_url } from "../utils/constants.js";
const RestaurantCard = (props) => {
    const {resData} = props;

    const {} = resData;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200">

        <img className="rounded-lg " src={CDN_url + resData.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-xl">{resData.name}</h3>
            <h4></h4>
            <h4>{resData.areaName}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>Rs {resData.costForTwo / 100}</h4>
            <h4>{resData.locality}</h4>  
        </div>
    );
}

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;