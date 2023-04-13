import React from 'react'
import './Home.css'
import "slick-carousel/slick/slick.css"; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import video from '../../assests/vdo3.mp4'
import img1 from '../../assests/img3.png'
import img2 from '../../assests/img2.png'
import img3 from '../../assests/img1.png'
import video1 from '../../assests/delivery-boy-3571543-3025940.mp4'
import MostOrder from './MostOrder'
import Categories from './Categories'
import Ofeerdeal from './Ofeerdeal'
import Footer from '../../shared/Footer';
import Location from './Location';



const Homecomp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      speed: 300,
      autoplaySpeed: 4000,
      cssEase: "linear"
  };
  return (
    <div>
      <div className='banner '>
       <video className='vdo' src={video} autoPlay loop muted></video>
       <div className='banner2 mt-6'>
        
        <h1 className='text-5xl font-bold mt-8'>Order Healthy And</h1>
        <h1 className='text-5xl font-bold'>Fresh Food Any Time</h1>
        <p className='mt-6 font-bold'>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
       </div>
      </div>

     <div className="category ml-10 mr-10">
      

      <div className='grid grid-cols-3 gap-2 mt-16 ' >
        <div className='flex services'>
          <img className='catimg' src={img1} alt="" />
          <div className='info '>
          <h1 className='text-2xl font-bold mb-4'>Fresh & Hot food</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque ut et aliquid harum amet velit minima voluptate quaerat. Suscipit nihil nostrum corrupti! Ducimus obcaecati, sed vel accusamus assumenda aut?</p>
          </div>
          
        </div>

        <div className='flex services'>
        <img className='catimg' src={img2} alt="" />
        <div className='info'>
        <h1 className='text-2xl font-bold mb-4'>Super Fast Delivary</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque ut et aliquid harum amet velit minima voluptate quaerat. Suscipit nihil nostrum corrupti! Ducimus obcaecati, sed vel accusamus assumenda aut?</p>
        </div>
        
        </div>

        <div className='flex services'>
        <img className='catimg' src={img3} alt="" />
        <div className='info'>
        <h1 className='text-2xl font-bold mb-4'>Low costDelivary Charge</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque ut et aliquid harum amet velit minima voluptate quaerat. Suscipit nihil nostrum corrupti! Ducimus obcaecati, sed vel accusamus assumenda aut?</p>
        </div>
        
        </div>

      </div>

      
     </div>

     <div className='mt-12 text-start ml-16'>
      <Location></Location>
     </div>
     <div className='mt-12'>
      <Categories></Categories>
     </div>
        <div className='mt-12'>
        <MostOrder></MostOrder>
        </div>
        <div className='banner2img'>
          
        </div>
        <div className='mt-16'>
          <Ofeerdeal></Ofeerdeal>
        </div>

        <div className='process grid grid-cols-2 gap-4 mt-16 mr-16 ml-10  '>
          <div>
            <h1 className='font-bold'>How It Works</h1>
            <h1 className='text-4xl font-bold'>Simple Process</h1>

            <div className='grid grid-cols-3 gap-4 mt-24'>
                <div>
                  <img className='ml-9 mb-4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/002-checklist.png" alt="" />
                  <h1 className='text-xl font-bold'>Your Order</h1>

                </div>
                <div>
                <img className='ml-9 mb-4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/001-salary.png" alt="" />
                  <h1 className='text-xl font-bold'>Cash On Delivery</h1>
                </div>
                <div>
                <img className='ml-9 mb-4' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/003-box.png" alt="" />
                  <h1 className='text-xl font-bold'>Receive Order</h1>
              </div>
            </div>
          </div>

          <div>
            <video className='processvdo'   src={video1} autoPlay loop muted></video>
          </div>

          </div>

        <div className='mt-16'>
        <h1>SATISFIED CLIENTS</h1>
        <h1 className='text-5xl font-bold'>What Our Clients Say</h1>

        </div>
     
          
          <div className='grid grid-cols-2 gap-8 mt-16   text-start '>
        

          <div className='slider mt-16 ml-16'>
       
       <Slider {...settings}>
         <div >
           <h3>
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/logo-1-120x120.png" alt="" />
             <h1 className='font-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</h1>
             <h2 className='font-bold text-xl mt-2'>Alex John Doe</h2>
             <p>Mater Chef</p>
           </h3>
         </div>
         <div>
         <h3>
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/logo-3-120x120.png" alt="" />
             <h1 className='font-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</h1>
             <h2 className='font-bold text-xl mt-2'>Alex John Doe</h2>
             <p>Mater Chef</p>
           </h3>
         </div>
         <div>
         <h3>
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/logo-2-120x120.png" alt="" />
             <h1 className='font-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</h1>
             <h2 className='font-bold text-xl mt-2'>Alex John Doe</h2>
             <p>Mater Chef</p>
           </h3>
         </div>
         <div>
         <h3>
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/logo-1-120x120.png" alt="" />
             <h1 className='font-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</h1>
             <h2 className='font-bold text-xl mt-2'>Alex John Doe</h2>
             <p>Mater Chef</p>
           </h3>
         </div>
         <div>
         <h3>
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/logo-1-120x120.png" alt="" />
             <h1 className='font-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</h1>
             <h2 className='font-bold text-xl mt-2'>Alex John Doe</h2>
             <p>Mater Chef</p>
           </h3>
         </div>
         <div>
         <h3>
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/logo-1-120x120.png" alt="" />
             <h1 className='font-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</h1>
             <h2 className='font-bold text-xl mt-2'>Alex John Doe</h2>
             <p>Mater Chef</p>
           </h3>
         </div>
       </Slider>
     </div>
            <div>
              <img  src="https://marketplace.foodotawp.com/wp-content/uploads/2021/06/45.png" alt="" />
            </div>


          

          </div>

        <div className='grid grid-cols-2 gap-4 mt-28 mr-16 ml-10' >

        <div>
            <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/Online-delivery-1.png" alt="" />
          </div>

          <div>
              <h1>DINE IN OR TAKE AWAY</h1>
            <h1 className='text-5xl font-bold'>
            Get Your Order 24/7
            </h1>
            <h1 className='text-5xl font-bold'>
            Right At Your Doorsteps
            </h1>

            <p className='mt-4'>Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have ap*p*roximately half the risk of developing diabetes</p>


              <div  className='mt-8 '>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Order Food</button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-4">Search Now</button>
              </div>
            



          </div>

          

        </div>

        <div>
          
        </div>
        <hr />
        <div className='mt-16'>
        <Footer></Footer>
        </div>
       

    </div>
  )
}

export default Homecomp;
