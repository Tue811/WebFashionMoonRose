// import { LISTPRODUCTS } from "../../contants/productsContants";
import db from "../../db"
import { ADDCART } from "../contants/productsContants";

// export function ListProducts(payload) {
//   console.log(987)
//   return {
//     type: LISTPRODUCTS,
//     payload: payload,
//   };
// }

export const listProducts =async (limit) => {
  
    try {
      const collectionRef = db.collection('product');
      const snapshot = await collectionRef.limit(limit).get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
      
      // dispatch({ type: 'LISTPRODUCTS', payload: data });
    } catch (error) {
      // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      return [];
    }

};

export const listCategories =async () => {
  
  try {
    const collectionRef = db.collection('categories');
    const snapshot = await collectionRef.get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
    
    // dispatch({ type: 'LISTPRODUCTS', payload: data });
  } catch (error) {
    // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    return [];
  }

};

// export const addCart =(payload)=>{
//   return{
//     type: ADDCART,
//     payload: payload
//   }
// }