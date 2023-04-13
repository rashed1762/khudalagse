import React, { useContext } from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import video from '../../src/assests/105639-signup.mp4'
import { AuthContext } from '../context/AuthProvider';
import './login.css'


const Logincomp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const {signIn}=useContext(AuthContext);
  const [loginErroe,setLoginError]=useState('');
  const location=useLocation();
  const navigate=useNavigate();

  const from=location.state?.from?.pathname || '/';

  const handleLogin=data=>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from,{replace:true});

      })
      .catch(error=>{
        console.log(error.message)
      setLoginError(error.message);
      });
  }


  return (
    <div >
   
    <div className='log grid grid-cols-2 gap-4  '>
      <div className='form login'>
      <h1 className='text-4xl font-bold'>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
      
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text ml-40">Email</span>
    
  </label>
  <input {...register("email",
  
  {required:"Email Address is required"})}
   type="text" placeholder="Type here" 
  className="input input-bordered w-full max-w-xs ml-40" />
  {errors.email && <p className='text-rose-600 ml-32' role="alert">{errors.email?.message}</p>}
 
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text  ml-40">Password</span>
    
  </label>
  <input {...register("password",
  {required:"password Address is required"})}
   type="password"
   placeholder="Type here" 
  className="input input-bordered w-full max-w-xs  ml-40" />
  {errors.password && <p className='text-rose-600 ml-28' role="alert">{errors.password?.message}</p>}
 
</div>





     
      
<button type="submit" className="btn btn-outline btn-accent mt-4">Login</button>

      <div>
        {loginErroe && <p className='text-red-600'>{loginErroe}</p> }
      </div>
    </form>

    <small> <p className='mt-3 '>New to khuda Lagse? <Link to="/register"><span className=' text-blue-700 font-bold'>Create New Account</span> </Link></p></small>
    <div className="flex flex-col w-full border-opacity-50">
  
  <div className="divider">OR</div>

</div>

      <button  className="btn btn-secondary">Continue With GooGle  </button>
      </div>

      
    
    <div>
      <video src={video} autoPlay loop muted></video>
    </div>
    </div>


   
    

    </div>
  )
}

export default Logincomp;