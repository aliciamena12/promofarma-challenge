'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart} from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image'
import { store } from '@/lib/redux/store';
import React, { useEffect, useState } from 'react';
import { addToCart } from '@/lib/redux/slice/cart.slice';

export interface Product {
  readonly code: string;
  readonly name: string;
  readonly supplier: string;
  readonly dosageForm: string;
  readonly rating: number;
  readonly reviewCount: number;
  readonly packagingSize: string;
  readonly defaultSaleCondition: string;
  readonly baseprice: string;
  readonly url: string;
  readonly available: boolean;
  readonly stock?: number;
  readonly categories?: Array<ProductCategories>;
  readonly saleConditions: ProductSaleCondition;
  readonly prices: ProductPrices;
  readonly images: Array<ProductImages>;
}


export interface ProductCategories {
  readonly id: string;
  readonly name: string;
}


export interface ProductSaleCondition {
  readonly OR: Array<SaleConditionOR>;
}

export interface SaleConditionOR {
  readonly code: string;
  readonly packagingSize: string;
}

export interface ProductPrices {
  readonly salesPrice: PriceValues;
  readonly recommendedRetailPrice: PriceValues;
  readonly savings: PriceValues;
  readonly savingsPercentageFormatted: string;
}

export interface PriceValues {
  readonly value: number,
  readonly formattedValue: string
}


export interface ProductImages {
  readonly id: number,
  readonly versionNumber: number,
  readonly meta: ProductImageMeta,
  readonly variants: ProductImageVariants,
}

export interface ProductImageMeta {
  readonly tags: Array<string>,
}


export interface ProductImageVariants {
  readonly 90: ProductImageVariantsItem,
  readonly 100: ProductImageVariantsItem,
  readonly 140: ProductImageVariantsItem,
  readonly 300: ProductImageVariantsItem,
  readonly 420: ProductImageVariantsItem,
  readonly 1000: ProductImageVariantsItem,
}

export interface ProductImageVariantsItem {
  readonly formats: ProductImageVariantsItemFormat,
  readonly width: number,
  readonly height: number
}

export interface ProductImageVariantsItemFormat {
  readonly avif: ImageFormat,
  readonly jpg: ImageFormat,
  readonly webp: ImageFormat,
}

export interface ImageFormat {
  readonly resolutions: ImageResolution,
}

export interface ImageResolution {
  readonly '1x': ImageResolutionUrl,
  readonly '2x': ImageResolutionUrl,
}

export interface ImageResolutionUrl {
  readonly url: string,
}

export interface ProductProps {
  readonly productData: Product;
}

function ProductTile({productData}: ProductProps) {

  const [cartObject, setCartObject] = useState(() => {
    
    if(typeof window !== "undefined"){
      const cartFromStorage = window.localStorage.getItem('cart')
      return cartFromStorage ?? {};
    }
    return null;
  })
  
  useEffect(() =>{
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  }, [cartObject])

  const handleAddToCart = ( productData: Product ) => {
    store.dispatch(
      addToCart(productData),
    )
    const newCartObject =cartObject===store.getState().cart.cart 
    setCartObject(newCartObject);
  }

  return (
    <div className="flex lg:flex-col lg:relative lg:w-full" >
      <div className='w-2/5 justify-center'>
        {/* <Image src={productData.images[0].variants[100].formats.avif.resolutions['1x'].url}  width={100} height={100} alt=''></Image> */}
        <Image src={"https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__"}  width={100} height={100} alt=''></Image>
        <p className='text-xs text-gray-500 my-2.5'>
          Pflitchtangaben
        </p>
        <button className='bg-green-900 rounded-lg p-3 text-white font-bold hover:bg-green-700 lg:absolute lg:bottom-0 lg:right-10 lg:self-end'
        onClick={(): void => {handleAddToCart(productData)}}>
          +<FontAwesomeIcon icon={faCartShopping} />
          </button>
      </div>
      
      <div className='w-3/5 items-center'>
        <div className='flex'>
          <h3 className='font-bold text-xl text-gray-700 h-14 overflow-hidden leading-normal break-normal'>
            {productData.name}
          </h3>
          <div className='hover:text-red-700'>
            <FontAwesomeIcon icon={faRegularHeart} />
          </div>
        </div>
        <p className='font-bold text-gray-500 text-sm'>
          {productData.packagingSize} · {productData.dosageForm}
        </p>
        <p className='font-bold text-gray-500 text-sm truncate'>
          {productData.supplier}
        </p>
        <div className='text-yellow-400 lg:hidden'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className='flex'>
            <span className='font-bold'>
              {productData.prices.salesPrice.formattedValue}
            </span>
            <span className='line-through text-gray-500'>
              {productData.prices.recommendedRetailPrice.formattedValue}
            </span>
        </div>
        <p className='font-bold text-gray-500'>
          {productData.baseprice}
        </p>
        <p className='text-xs text-gray-500 lg:hidden'>
          Gesponsert
        </p>
      </div>
    </div>
  );
}

export default ProductTile;
