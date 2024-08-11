'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { CartProduct, decrementQuantity, incrementQuantity, removeItemFromCart } from '@/lib/redux/slice/cartSlice';
import { store } from '@/lib/redux/store';


export interface Props {
  readonly cartItem: CartProduct;
}

function Cart({cartItem}: Props) {

  const handleRemoveItemFromCart = ( cartItem: CartProduct ) => {
    store.dispatch(
      removeItemFromCart(cartItem),
    )
  }

  const handleDecrementQuantity = ( cartItemId: string ) => {
    store.dispatch(
      decrementQuantity(cartItemId),
    )
  }

  const handleIncrementQuantity = ( cartItemId: string ) => {
    store.dispatch(
      incrementQuantity(cartItemId),
    )
  }

  return (
    <div className="flex p-6 items-center" >
      <div className='w-2/5 justify-center'>
        <Image src={"https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__"}  width={140} height={140} alt={'Image of product: ' + cartItem.name}></Image>
      </div>
      <div className='w-3/5 items-center'>
        <div className='flex'>
          <h3 className='font-bold text-xl text-gray-700'>
            {cartItem.name}
          </h3>
          <button className="self-start" title="removeItem" onClick={(): void => {handleRemoveItemFromCart(cartItem)}}>
          <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <p className='font-bold text-gray-500 text-sm'>
          {cartItem.packagingSize} · {cartItem.dosageForm}
        </p>
        <p className='font-bold text-gray-500 text-sm truncate py-1'>
          PZN: {cartItem.code}
        </p>
        <p className='text-xs text-gray-500'>
          Einzelpreis: {cartItem.price.toFixed(2)}
        </p>
        <div className='flex items-center justify-between py-2'>
          <span className='font-bold'>
            <div className="relative flex items-center max-w-[8rem]">
            <button type="button" title="decrementQuantity" id="decrementQuantityButton" data-input-counter-decrement="quantity-input" className="bg-white border border-r-0 border-gray-300 rounded-s-lg p-3 h-11 decrementQuantityButton" disabled={cartItem.quantity==1}
            onClick={(): void => {handleDecrementQuantity(cartItem.id)}}>
                <span className="w-3 h-3 text-gray-900" aria-hidden="true"  >
                    -
                </span>
            </button>
            <input type="number" title="quantity" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" 
            className="bg-white border-y border-gray-300 h-11 w-5 text-right text-gray-900 text-sm block py-2.5" 
            value={cartItem.quantity} required disabled />
            <button type="button" title="incrementQuantity" id="incrementQuantityButton" data-input-counter-increment="quantity-input" className="bg-white border border-l-0 border-gray-300 rounded-e-lg p-3 h-11 incrementQuantityButton"  disabled={cartItem.quantity==cartItem.stockLevel}
            onClick={(): void => {handleIncrementQuantity(cartItem.id)}}>
                <span className="w-3 h-3 text-gray-900" aria-hidden="true">
                    +
                </span>
            </button>
            </div>
          </span>
          <span className='text-gray-500'>
            {(cartItem.price * cartItem.quantity).toFixed(2)} €
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
