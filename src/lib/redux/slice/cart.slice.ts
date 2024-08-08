import { Product } from '@/components/product-list/product-tile/product-tile.component';
import { setCartStorage } from './../../utils/localStorage';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StateCart {
    id: number;
    cartItems:  CartProduct[];
    totalPrice: number;
    totalQuantityCount: number;
}

export interface CartState {
  cart: StateCart;
}

  export interface CartProduct {
    id: string;
    name: string;
    image: string;
    packagingSize: string;
    dosageForm: string;
    code: string;
    price: number;
    quantity:number;
  }


  const initialState: CartState = {
    cart: {
      id:0,
      cartItems: [],
      totalQuantityCount: 0,
      totalPrice: 0
    },
  };
  

  export const getCart = (state: CartState): StateCart => {
    return state.cart;
  };

  export const updateCart = (cart: StateCart): void => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cartItems.forEach((element) => {
      totalQuantity = totalQuantity + element.quantity;
      totalPrice = totalPrice + (element.price * element.quantity);
    })
    cart.totalQuantityCount = totalQuantity;
    cart.totalPrice = totalPrice;
    setCartStorage(cart);
  };
  
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {

      const productData: Product = action.payload;
      const existingCartItem = state.cart.cartItems.find((item: CartProduct) => item.id == productData.code);

      let currentItemQuantity = existingCartItem?.quantity || 0;

      const cartProduct: CartProduct = {
        id: productData.code,
        name: productData.name,
        image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
        packagingSize: productData.packagingSize,
        dosageForm: productData.dosageForm,
        code: productData.saleConditions.OR[0].code,
        price: productData.prices.salesPrice.value,
        quantity: currentItemQuantity + 1,
      }
     
      let currentCartList: Array<CartProduct> = state.cart.cartItems;
      let updatedCartList: Array<CartProduct> = state.cart.cartItems;

      if (!existingCartItem) {
        updatedCartList = currentCartList;
        updatedCartList.push(cartProduct);
      } else {

        currentCartList.forEach(element => {
          if(element.id == cartProduct.id) {
            element.quantity++;
          }
        })
        updatedCartList = currentCartList;
        console.log(" update "+JSON.stringify(updatedCartList))
      }
      const newState: StateCart = {...state.cart, cartItems: updatedCartList};
      state.cart = newState;
      updateCart(newState);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      state.cart.cartItems.find((item: CartProduct) => {
        if(item.id === action.payload) {
          item.quantity++;
          state.cart.totalQuantityCount++;
        }}
      )
      state.cart.totalQuantityCount++;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      state.cart.cartItems.find((item: CartProduct) => {
        if(item.id === action.payload) {
          if(item.quantity > 0) {
            item.quantity--;
            state.cart.totalQuantityCount--;
          } else {
            state.cart.cartItems.filter((item)=> item.id !== item.id);
          }
        }}
      )
      state.cart.totalQuantityCount--;
    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity  } = cartSlice.actions;