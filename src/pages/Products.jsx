import React from 'react';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    imageUrl: 'https://imgs.search.brave.com/_kq3Yf98gmsi20NwEAGQdHg_k9la727ysbWi0xWJiiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNi9pbWFn/ZTIxLnBuZw',
    title: 'Fresh Sugarcane',
    price: '100₹',
    rating: 5,
  },
  {
    id: 2,
    imageUrl: 'https://imgs.search.brave.com/_kq3Yf98gmsi20NwEAGQdHg_k9la727ysbWi0xWJiiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNi9pbWFn/ZTIxLnBuZw',
    title: 'Fresh Sugarcane',
    price: '100₹',
    rating: 2,
  },
  {
    id: 3,
    imageUrl: 'https://imgs.search.brave.com/_kq3Yf98gmsi20NwEAGQdHg_k9la727ysbWi0xWJiiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNi9pbWFn/ZTIxLnBuZw',
    title: 'Fresh Sugarcane',
    price: '100₹',
    rating: 5,
  },
  {
    id: 4,
    imageUrl: 'https://imgs.search.brave.com/_kq3Yf98gmsi20NwEAGQdHg_k9la727ysbWi0xWJiiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNi9pbWFn/ZTIxLnBuZw',
    title: 'Fresh Sugarcane',
    price: '100₹',
    rating: 5,
  },
  {
    id: 5,
    imageUrl: 'https://imgs.search.brave.com/_kq3Yf98gmsi20NwEAGQdHg_k9la727ysbWi0xWJiiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNi9pbWFn/ZTIxLnBuZw',
    title: 'Fresh Sugarcane',
    price: '100₹',
    rating: 5,
  },
  {
    id: 6,
    imageUrl: 'https://imgs.search.brave.com/_kq3Yf98gmsi20NwEAGQdHg_k9la727ysbWi0xWJiiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhj/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNi9pbWFn/ZTIxLnBuZw',
    title: 'Fresh Sugarcane',
    price: '100₹',
    rating: 5,
  },
];

const Products = () => {

    const handleClick=(item_id) => {
        alert(`Item with id ${item_id} enquired`)
      console.log(item_id)
    }
    
  return (
    <section className="py-8 bg-gray-100" id="Products">
      <h1 className="text-3xl text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 p-4 rounded-lg text-center">
            <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold my-2">{product.title}</h2>
            <div className="text-green-600 text-xl mb-2">{product.price}</div>
            <div className="flex justify-center mb-4">
              {[...Array(product.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <button onClick={()=>{handleClick(product.id)}} className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-green-600">
              Enquire
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
