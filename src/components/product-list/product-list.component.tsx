import ProductTile from './product-tile/product-tile.component';
import {Product} from './product-tile/product-tile.component'


export interface Props {
    readonly products: Array<Product>;
}

 function ProductList({products}: Props) {

  return (
    <div className="container divide-y divide-solid flex flex-col lg:flex-row lg:w-3/5 lg:flex-wrap lg:divide-none">
      { products.map((productItem)=> {
        return  <div key={productItem.code} className='flex py-4 lg:w-2/6'>
                  <ProductTile key={productItem.code} productData={productItem} />
                </div>
      })} 
    </div>
  );
}

export default ProductList;



