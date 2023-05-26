import {ADDCART, LISTPRODUCTS} from "../contants/productsContants"
import { db } from '../../db'

const initialState = {
    product:[],
    cart:[],
    
};


function userReducer(state = initialState, action){
    switch(action.type){
    case LISTPRODUCTS:
        return {...state, product: action.payload};

    case ADDCART:
        {
            // console.log(action)
            return{
                ...state,
                cart: action.payload
            }
        }
     

    default: 
        return state;
    }
}

export default userReducer;