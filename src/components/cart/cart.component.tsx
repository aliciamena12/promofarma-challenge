
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product-list/product-tile/product-tile.component';
import React from 'react';
import CartEntry from './cart-entry/cart-entry.component';
import { store } from '@/lib/redux/store';


export interface CartItem {
  readonly id: string;
  readonly product: Product;
  readonly quantity: number;
  readonly name: string;
  readonly totalPrice: number;
}


 function Cart() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartObject, setCartObject] = React.useState(store.getState().cart.cart);

  store.subscribe(() => {
    setCartObject(store.getState().cart.cart);
  });
  
  return (
    <div className='max-h-full w-full fixed bottom-0 bg-white  border-t shadow-inner lg:w-2/5 lg:relative lg:rounded-lg lg:h-4/6 lg:bottom-auto'>
        <div className={"h-[90vh] flex-col justify-between items-center  overflow-scroll" + (isCartOpen ? 'block' : 'hidden') + "lg:block "}>
          <button className='rounded-lg p-3 font-bold right-0 lg:hidden'
          onClick={(): void => {setIsCartOpen(false);}}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {cartObject.cartItems.map((item) => {
            return <CartEntry key={item.id} cartItem={item} />
          })}
          <div className=' w-full fixed bottom-0 bg-white border-t shadow-inner p-5 lg:bottom-auto lg:relative'>
            <h4 className='font-bold text-xl'>
              Total
            </h4>
            <div className='flex justify-between'>
              <span>Summe ({cartObject.totalQuantityCount} produkte)</span> 
              <span>{cartObject.totalPrice} €</span>
            </div>
          </div>
        </div>
        <div className={"h-1/5 flex justify-between items-center p-5 lg:h-[90vh] lg:hidden " + (isCartOpen ? 'hidden' : 'block') }>
          <p>
            {cartObject.totalQuantityCount} Produkte
          </p>
          <button className='bg-green-900 rounded-lg p-3 text-white font-bold hover:bg-green-700'
          onClick={(): void => {setIsCartOpen(true);}}>
           Zur Übersicht
          </button>
        </div>
    </div>
);
}

export default Cart;


