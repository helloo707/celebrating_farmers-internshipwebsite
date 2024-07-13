import React from 'react';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    imageUrl: '/ganna-tea.png',
    title: 'Sugarcane Tea',
    price: '70₹',
    rating: 4,
  },
  {
    id: 2,
    imageUrl: '/ganna-juice.png',
    title: 'Sugarcane juice',
    price: '30₹',
    rating: 5,
  },
  {
    id: 3,
    imageUrl: '/ganna-icecubes.png',
    title: 'Sugarcane Ice cubes',
    price: '60₹',
    rating: 4,
  },
  {
    id: 4,
    imageUrl: '/ganna-herbal-tea.png',
    title: 'Sugarcane Herbal tea',
    price: '70₹',
    rating: 5,
  },
  {
    id: 5,
    imageUrl: '/ganna-imli-chatni.png',
    title: 'Sugarcane Imli chatani',
    price: '70₹',
    rating: 3,
  },
  {
    id: 6,
    imageUrl: '/ganna-black-coffee.png',
    title: 'Sugarcane Black Coffee',
    price: '70₹',
    rating: 4,
  },
  {
    id: 7,
    imageUrl: '/jalebi.png',
    title: 'Sugarcane Jalebi',
    price: '250₹',
    rating: 4,
  },
  {
    id: 8,
    imageUrl: '/laddu.png',
    title: 'Sugarcane Laddu',
    price: '900₹',
    rating: 5,
  },
  {
    id: 9,
    imageUrl: '/chuski-flovour.png',
    title: 'Sugarcane chuski flovour',
    price: '50₹',
    rating: 3,
  },
  {
    id: 10,
    imageUrl: '/pineapple-ganeri.png',
    title: 'Sugarcane Pineapple Ganeri',
    price: '600₹',
    rating: 5,
  },
  {
    id:11,
    imageUrl: '/ragi-pedha.png',
    title: 'Sugarcane Ragi Peda',
    price: '550₹',
    rating: 4,
  },
  {
    id: 12,
    imageUrl: '/pedha.png',
    title: 'Sugarcane Peda',
    price: '600₹',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 p-4 rounded-lg text-center flex flex-col justify-center items-center">
            <img src={product.imageUrl} alt={product.title} className="w-48 h-48 object-cover rounded-full hover:-translate-y-2 duration-300" />
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
