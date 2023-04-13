import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold'>Our Categories</h1>


        <div className='grid grid-cols-4 gap-4 mt-16 mr-16'>
        <div className="card card-compact  ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/Layer256-1.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Pizza</h2>
    </NavLink>
    <p>14 Restaurants Products</p>

  </div>
</div>
<div className="card card-compact  ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/1qLayer-1.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Broast</h2>
    </NavLink>
    <p>5 Restaurants Products</p>
  </div>
</div>
<div className="card card-compact  ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/sa1.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Chicken</h2>
    </NavLink>
    <p>11 Restaurants Products</p>
  </div>
</div>
<div className="card card-compact ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/pngwing.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Burgers</h2>
    </NavLink>
    <p>9 Restaurants Products</p>
  </div>
</div>
        </div>

        <div className='grid grid-cols-4 gap-4 mr-16 mt-12 ml-8'>
        <div className="card card-compact  ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/qawLayer-1.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Shakes</h2>
    </NavLink>
    <p>12 Restaurants Products</p>
  </div>
</div>
<div className="card card-compact  ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/sssssa1.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Sandwiches</h2>
    </NavLink>
    <p>14 Restaurants Products</p>
  </div>
</div>
<div className="card card-compact  ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/Layezr-1.png" alt="Shoes" /></figure>
  <div className="card-body">
  <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Pasta</h2>
    </NavLink>
    <p>8 Restaurants Products</p>
  </div>
</div>
<div className="card card-compact ">
  <figure><img className='categoryimg' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/asasLayer-1.png" alt="Shoes" /></figure>
  <div className="card-body">
    <NavLink to='/food' as={Link}>
    <h2 className="text-center text-3xl font-bold cattitle">Desserts</h2>
    </NavLink>
    
    <p>11 Restaurants Products</p>
  </div>
</div>
        </div>
    </div>
  )
}

export default Categories;