import Link from 'next/link';
import React from 'react'


const foods =[
{id: '1', name: 'jollof rice', price: '5000'},
{id: '2', name: 'fried rice', price: '5000'},
{id: '3', name: 'chicken', price: '3000'},
{id: '4', name: 'Egusi', price: '3000'},
{id: '5', name: 'yam and egg', price: '3000'},
];
export default function page() {
  return (
    <main className='p-8 bg-gray-200 min-h-screen'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>  menu </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 1g:grid-cols-3 gap-6'>
        {foods.map((food) => (
          <Link
          key={food.id}
          href={'/menu/${food.id}'}
          className='block p-4 bg-orange-800 shadow rounded hover:shadow-lg'>
            <h2 className='text-xl font-bold'>{food.name}</h2>
            <p className='text-white'>{food.price}</p>
          </Link>
        )
        
        )}
      </div>

    </main>
  )
}
