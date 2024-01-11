import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        //object having cart items 
        items:[],
    },
    reducers:{
        //object which can take actions 
        addItem:(state, action)=>{
            //modify the state according to the action 
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;

            //you can also do return[] this will replace original items(whole state);
            //this will also alter the original state 

            //you have to do, items:[]

            


        },

    }
});

export const{addItem, removeItem, clearCart} = cartSlice.actions;
//taking out actions individually and exporting it 

export default cartSlice.reducer;