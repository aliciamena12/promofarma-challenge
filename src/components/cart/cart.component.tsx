
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
    <div className='max-h-full w-full fixed bottom-0 bg-white border-t shadow-inner lg:w-2/5 lg:relative lg:rounded-lg lg:my-20 lg:h-4/6 lg:bottom-auto lg:shadow-xl'>
        <div className={"flex-col justify-between h-5/6 items-center overscroll-x-none " + (isCartOpen ? 'block' : 'hidden') + " lg:block "}>
          <div className='flex flex-row p-6 items-center justify-between'>
            <button className='rounded-lg p-3 font-bold right-0 lg:hidden'
            onClick={(): void => {setIsCartOpen(false);}}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <h3 className='text-xl text-gray-800 w-3/6 text-center lg:w-full'>
              Zum Warenkorb hinzugefügt
            </h3>
            <span className='text-gray-500 font-bold text-s lg:hidden'>
              {cartObject.totalQuantityCount} Produkte
            </span>
          </div>
          <div className='h-[80vh] overflow-y-scroll g:h-[60vh]'>
            {cartObject.cartItems.map((item) => {
              return <CartEntry key={item.id} cartItem={item} />
            })}
          </div>
          <div className=' w-full fixed bottom-0 bg-white border-t shadow-inner p-5 lg:bottom-auto lg:rounded-b-lg lg:relative'>
            <h4 className='font-bold text-xl text-gray-700'>
              Total
            </h4>
            <div id='cart__final-price' className='flex justify-between'>
              <span>Summe ({cartObject.totalQuantityCount} produkte)</span> 
              <span>{cartObject.totalPrice.toFixed(2)} €</span>
            </div>
          </div>
        </div>
        <div className={"h-1/5 flex justify-between items-center p-5 font-bold lg:h-[90vh] lg:hidden " + (isCartOpen ? 'hidden' : 'block') }>
          <p>
            {cartObject.totalQuantityCount} Produkte
          </p>
          <button className='bg-green-900 rounded-lg p-3 text-white hover:bg-green-700'
          onClick={(): void => {setIsCartOpen(true);}}>
           Zur Übersicht
          </button>
        </div>
    </div>
  );
}

export default Cart;


