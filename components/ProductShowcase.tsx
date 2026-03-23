// 'use client';

// import ProductCard from './ProductCard';

// const FEATURED_PRODUCTS = [
//   {
//     emoji: '🌿',
//     name: 'Caladea Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
//     price: 'Rs. 300/-',
//   },
//   {
//     emoji: '🌵',
//     name: 'Desk Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
//     price: 'Rs. 350/-',
//   },
//   {
//     emoji: '🪴',
//     name: 'Caladea AI Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
//     price: 'Rs. 399/-',
//   },
//   {
//     emoji: '🌱',
//     name: 'Cal-O2 Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
//     price: 'Rs. 250/-',
//   },
//   {
//     emoji: '🌾',
//     name: 'Snow Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
//     price: 'Rs. 750/-',
//   },
//   {
//     emoji: '🌳',
//     name: 'Caladei AI Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
//     price: 'Rs. 699/-',
//   },
// ];

// const TRENDING_PRODUCTS = [
//   {
//     emoji: '🌿',
//     name: 'Caladea Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur',
//     price: 'Rs. 300/-',
//   },
//   {
//     emoji: '🌵',
//     name: 'Desk Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur',
//     price: 'Rs. 350/-',
//   },
//   {
//     emoji: '🪴',
//     name: 'Caladea AI Plant',
//     description: 'Lorem ipsum dolor sit amet, consectetur',
//     price: 'Rs. 399/-',
//   },
// ];

// export default function ProductShowcase() {
//   return (
//     <div className="w-full py-20 md:py-32">
//       {/* Our Trendy Plants */}
//       <div className="container-Cherry mb-24">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Trendy Plants
//           </h2>
//           <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
//             Discover our curated collection of the most popular and trending indoor plants for your space.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {TRENDING_PRODUCTS.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </div>
//       </div>

//       {/* Top Selling Plants */}
//       <div className="container-Cherry">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Top Selling
//           </h2>
//           <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
//             Customer favorites and best-sellers that bring life and beauty to any space.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {FEATURED_PRODUCTS.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import {  getProducts } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.image';
import ProductCard from './ProductCard';

export default function ProductShowcase() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts();
      setData(res);
    }
    fetchData();
  }, []);
  
  if (!data.length) return <p>Loading...</p>;
  console.log(data,"product");

  return (
    <div className="bg-burgundy-velvet w-full py-20 md:py-32">

      {/* Trending */}
      <div className="container-Cherry mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Trendy Plants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, 3).map((product: any) => (
            <ProductCard
              key={product._id}
              name={product.name}
              description={product.description}
              price={`Rs. ${product.price}`}
              emoji={urlFor(product.image).url()}
            />
          ))}
        </div>
      </div>

     

    </div>
  );
}