import { StateCart } from "../redux/slice/cartSlice";

export const getCartStorage = (): any => {
  return JSON.parse(window.localStorage.getItem("cart")!)   
};
  
export const setCartStorage = (cart: StateCart) => {
  return localStorage.setItem("cart", JSON.stringify(cart))    
};
