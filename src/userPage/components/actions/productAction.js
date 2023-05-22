import { LISTPRODUCTS } from "../../contants/productsContants";

export function ListProducts(payload) {
  return {
    type: LISTPRODUCTS,
    payload: payload,
  };
}
