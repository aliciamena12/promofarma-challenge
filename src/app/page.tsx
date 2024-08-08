'use client'
import Cart from '@/components/cart/cart.component';
import ProductList from '../components/product-list/product-list.component';
import products from '../lib/data/products.json'
import {Provider} from "react-redux"
import {store} from '../lib/redux/store';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 font-DM lg:flex-row lg:p-14 lg:items-start">
      <Provider store={store}>
        <ProductList products={products} />
        <Cart/>
      </Provider>
    </main>
  );
}