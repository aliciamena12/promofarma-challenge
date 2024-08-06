'use client'
import ProductList from '../components/product_list/product-list.component';
import products from '../lib/data/products.json'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 font-DM">
      <ProductList products={products} />
    </main>
  );
}
