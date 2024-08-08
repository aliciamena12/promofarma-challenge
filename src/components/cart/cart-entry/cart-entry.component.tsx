'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart} from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { CartProduct } from '@/lib/redux/slice/cart.slice';


export interface Cart {
  readonly id: number;
  readonly cartItems?: Array<CartProduct>;
  readonly deliveryCost: number;
  readonly subTotal: number;
  readonly totalPrice: number;
  readonly totalQuantityCount: number;
}


export interface Props {
  readonly cartItem: CartProduct;
}

function Cart({cartItem}: Props) {

  return (
    <div className="flex p-6" >
      <div className='w-2/5 justify-center'>
        <Image src={"https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__"}  width={100} height={100} alt=''></Image>
        <p className='text-xs text-gray-500 my-2.5'>
          Pflitchtangaben
        </p>
        <button className='bg-green-900 rounded p-3 text-white font-bold'>+ 
          <FontAwesomeIcon icon={faCartShopping} />
          </button>
      </div>
      <div className='w-3/5 items-center'>
        <div className='flex'>
          <h3 className='font-bold text-xl text-gray-700'>
            {cartItem.name}
          </h3>
          <div>
            <FontAwesomeIcon icon={faRegularHeart} />
          </div>
        </div>
        <p className='font-bold text-gray-500 text-sm'>
          {cartItem.packagingSize} · {cartItem.dosageForm}
        </p>
        <p className='font-bold text-gray-500 text-sm truncate'>
          PZN: {cartItem.code}
        </p>
        <p className='text-xs text-gray-500'>
          EinzelPreis: {cartItem.price}
        </p>
        <div className='flex items-center justify-around'>
          <span className='font-bold'>
            <div className="relative flex items-center max-w-[8rem]">
            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-white border border-r-0 border-gray-300 rounded-s-lg p-3 h-11">
                <svg className="w-3 h-3 text-gray-900" aria-hidden="true" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                </svg>
            </button>
            <input type="number" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" 
            className="bg-white border-y border-gray-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5" 
            value={cartItem.quantity} required disabled />
            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-white border border-l-0 border-gray-300 rounded-e-lg p-3 h-11">
                <svg className="w-3 h-3 text-gray-900" aria-hidden="true"  fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
            </button>
            </div>
          </span>
          <span className='text-gray-500'>
            {cartItem.price * cartItem.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
