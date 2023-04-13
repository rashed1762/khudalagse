import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocation, faLocationDot, faStopwatch, faTimes } from '@fortawesome/free-solid-svg-icons'

const MostOrder = () => {
  return (
    <div className='bg-slate-300'>
        <h1 className='text-5xl font-bold'>Papular Restaurants</h1>

        <div className='grid grid-cols-3 gap-4 mt-16 mr-16 ml-10'>
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Arcadian.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex mt-4'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/066-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/broadway.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex mt-4'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/022-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>


<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/downtown.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4 ">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/downtown-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>

</div>





<div className='grid grid-cols-3 gap-4 mt-16 mr-16 ml-10'>
<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/hardees.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/088-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Howdy.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4 ">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/077-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>


<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/mcdonalds.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4 ">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/0011-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>

</div>




<div className='grid grid-cols-3 gap-4 mt-16 mr-16 ml-10'>
<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4 ">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/055-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/nandos.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4 ">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/010-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>


<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Avanty Resturant
      <div className="">
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </h2>
    <div className="card-actions mb-4 ">
      <div className="badge badge-outline">Shakes</div> 
      <div className="badge badge-outline">Steaks</div>
      <div className="badge badge-outline">Sea Food</div>
      <div className="badge badge-outline">Chicken</div>
      <div className="badge badge-outline">Pasta</div>
      <div className="badge badge-outline">Set Menu</div>
      <div className="badge badge-outline">Appetizers</div>
    </div>
    
    <div className="card-actions text-start  lastpart">
      <div className='flex'>
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/0112-50x50.jpg" alt="" />
        <div>
          <p className='ml-2 text-1xl text-red-500 '><span className='text-emerald-600'><FontAwesomeIcon icon={faStopwatch} /></span> 12pm-11pm</p>
          <p className='ml-2 text-1xl'><span className='text-emerald-600 '><FontAwesomeIcon icon={faLocationDot} /></span>46/1 sehra road,mymensingh</p>
          
        </div>

      </div>
    </div>
  </div>
</div>

</div>



    </div>
  )
}

export default MostOrder;