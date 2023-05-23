import {LISTPRODUCTS} from "../contants/productsContants"
import { db } from '../../db'

const initialState = {
    product:[],
    
};


function userReducer(state = initialState, action){
    switch(action.type){
    case LISTPRODUCTS:
        return {...state, product: action.payload};


    default: 
        return state;
    }
}

export default userReducer;