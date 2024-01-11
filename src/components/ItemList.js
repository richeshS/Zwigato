import { CDN_url } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";


const ItemList = ({items}) => {
   
    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //Dispatch and Action 
        dispatch(addItem(item));

        //whatever you pass in here will go in reducer function 
        //in action.payload 
        
        //whenever you make this an object will be created 
    
    }
   
   
    return (<div>
    
        
            {items.map((item) =>( 
                <div 
                key={item.card.info.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                <div className="absolute">                
                    <button 
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={()=>handleAddItem(item)}
                    >
                    Add +
                    </button>
                </div>
                <img src={CDN_url+item.card.info.imageId}  className="w-full"/>

                </div>
                    </div>))}
        
    
    </div>

)

            }

export default ItemList;