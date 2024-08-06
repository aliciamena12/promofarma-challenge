import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

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

export interface Props {
  readonly productData: Product;
}

function Product({productData}: Props) {

  return (
    <div className="flex">
      <div className='w-2/5 justify-center'>
        <Image src={productData.images[0].variants[100].formats.avif.resolutions['1x'].url}  width={100} height={100} alt=''></Image>

        <p className='text-xs text-gray-500 my-2.5'>
          Pflitchtangaben
        </p>

        <button className='bg-green-900 rounded p-3 text-white font-bold'>+ 
          <FontAwesomeIcon icon={faCartShopping} />
          </button>
      </div>
      
      <div className='w-3/5 items-center'>
        <h3 className='font-bold text-xl text-gray-800'>
          {productData.name}
        </h3>
        <p className='font-bold text-gray-500 text-sm'>
          {productData.packagingSize} · {productData.dosageForm}
        </p>
        <p className='font-bold text-gray-500 text-sm truncate'>
          {productData.supplier}
        </p>
        {/* <span>
          {productData.rating} · {productData.reviewCount}
        </span> */}
        <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />

        </div>

        {/* {productData.available}
        {productData.stock} */}

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

            
        <p className='text-xs text-gray-500'>
          Gesponsert
        </p>

        <br />
        <br />
        <br />
      </div>
    </div>
);
}

export default Product;
