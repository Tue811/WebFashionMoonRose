import {
  ADDCART,
  LISTPRODUCTS,
  PUSH_TO_ORDER,
  REMOVE_ORDER,
  UPDATECART,
  UPDATEORDER,
  NULL_ORDER
} from "../contants/productsContants";
import { db } from "../../db";

const initialState = {
  product: [],
  cart: [],
  order: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LISTPRODUCTS:
      return { ...state, product: action.payload };

    case ADDCART: {
      // console.log(action)
      return {
        ...state,
        cart: state.cart,
      };
    }
    case UPDATECART: {
      return { ...state, cart: state.cart, isLoading: true };
    }

    case UPDATEORDER: {
      return { ...state, order: state.order, isLoading: true };
    }

    case PUSH_TO_ORDER: {
      console.log("action", action);
      const order = [...state.order, action.payload];
      return {
        ...state,
        order,
        isloading: true,
      };
    }

    case REMOVE_ORDER: {
      const order = [...state.order];
      const index = order.findIndex((item) => item?.id === action.payload);
      console.log("payload", order);

      if (index !== -1) {
        order.splice(index, 1);
      }
      return {
        ...state,
        order,
      };
    }
    case NULL_ORDER:{
      console.log(123)
      return {
        ...state,
        order: []
      };
    }

    default:
      return state;
  }
}

export default userReducer;
