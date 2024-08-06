'use client'
import ProductTile from './product-tile/product-tile.component';
import {Product} from './product-tile/product-tile.component'


export interface Props {
    readonly products: Array<Product>;
}

async function ProductList({products}: Props) {

  return (
    <div className="container">
      { products.map((productItem)=> {
        return  <div key={productItem.code}>
                  <ProductTile key={productItem.code} productData={productItem} />
                </div>
      })} 
    </div>
  );
}

export default ProductList;



