import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Home.css'

const Location = () => {
  return (
    <div>
        <h1 className='text-3xl'>Choose your location and get your food !!</h1>

        <div className='grid grid-cols-3 gap-4 mr-12 mt-16 '>

      <NavLink to="/dhaka" aria-setsize={Link}>

      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://media.istockphoto.com/id/1210768445/photo/skyscraper-in-dhaka-metropolitan-area.jpg?s=612x612&w=0&k=20&c=qGFV2qpVXkUNtm8KYT2avrSZwcBcoeM9wIp4LdADgrI=" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl font-bold">Dhaka</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/LetterD.svg/1200px-LetterD.svg.png" alt="" />
    
    </div>
  </div>
</div>
      </NavLink>

        

    <NavLink to="/mymnsingh" as={Link}>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://vromonguide.com/wp-content/uploads/Daylong-Tour-in-Mymensingh.jpg" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Mymensingh</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="" />
    
    </div>
  </div>
</div>
    </NavLink>




<NavLink to="/sylhet" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://2.bp.blogspot.com/-An6QZXocN0E/WNvdCTXl0FI/AAAAAAAAAM4/6vBiqzYsHrs-9Y-8TvxQ2xZ7OkZaV2DlACLcB/s1600/Sylhet1.jpg" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Sylhet</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Letter_s.svg/1200px-Letter_s.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>




<NavLink to="/coxbazar" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://thefinancialexpress.com.bd/uploads/1669649110.jpg" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Cox's Bazar</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/LetterC.svg/1200px-LetterC.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>



<NavLink to="/savar" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Jatiyo_Smriti_Soudho%2C_concrete_modernist_monument_and_memorial_gardens%2C_at_Savar_near_Dakar_in_central_Bangladesh.jpg" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Savar</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Letter_s.svg/1200px-Letter_s.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>



<NavLink to="/Rajsahi" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fb/7f/a5/pancharatna-shiva-mandir.jpg?w=700&h=500&s=1" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Rajshahi</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/LetterR.svg/1200px-LetterR.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>



<NavLink to="/khulna" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://thumbs.dreamstime.com/b/view-over-khulna-bangladesh-center-88219901.jpg" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Khulna</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Letter_k.svg/1200px-Letter_k.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>



<NavLink to="/gazipur" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://www.lrbtravelteam.com/wp-content/uploads/2020/11/Safari-Park..png" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Gazipur</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/LetterG.svg/640px-LetterG.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>



<NavLink to="/comilla" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://zrtktk.files.wordpress.com/2016/05/mahavihara-somapura-paharpurnaogaon.jpg?w=714" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Comilla</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/LetterC.svg/1200px-LetterC.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>




<NavLink to="/rangpur" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a0/70/5f/kantajew-temple-with.jpg?w=600&h=400&s=1" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Rangpur</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/LetterR.svg/1200px-LetterR.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>




<NavLink to="/ctg" as={Link}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg1' src="https://www.bproperty.com/blog/wp-content/uploads/2021/03/Karnaphuli_River_at_night_02.jpg" alt="Shoes" /></figure>
  <div className="card-body infocrd">
    <h2 className="card-title text-4xl">Chattogram</h2>
    <div className='infocrd2 '>

    <img className='crdimg2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/LetterC.svg/1200px-LetterC.svg.png" alt="" />
    
    </div>
  </div>
</div>
</NavLink>


        </div>

    </div>
  )
}

export default Location;