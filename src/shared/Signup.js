import React, { useContext } from 'react'
import video from '../../src/assests/105639-signup.mp4'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const {createUser,updateUser}=useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('');

    const handleSignup=(data)=>{
      console.log(data);
      setSignUpError('')
      createUser(data.email, data.password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        toast('user created successfully')
        const userInfo={
          displayName:data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(err =>console.log(err));
      })
      .catch(error=>{
        console.log(error)
        setSignUpError(error.message);

      })
}
  
  
    return (
      <div >
     
      <div className='log grid grid-cols-2 gap-4 '>
        <div className='form login'>
        <h1 className='text-4xl font-bold'>Sign Up</h1>
        
        <form  onSubmit={handleSubmit(handleSignup)}>
        
        <div className="form-control w-full max-w-xs">
        <label className="label">
      <span className="label-text ml-40 mt-8">Name <span className=' text-rose-800'>*</span></span>
      
    </label>
    <input {...register("name",
  
  {required:"Name Address is required"})}
   type="text" placeholder="Type here" 
  className="input input-bordered w-full max-w-xs ml-40" />
  {errors.name && <p className='text-rose-600 ml-32' role="alert">{errors.name?.message}</p>}


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
  
  
  
  
  
       
  <button type="submit" className="btn btn-outline btn-accent mt-4">SignUp</button>
        

            {signUpError && <p className='text-red-600'>{signUpError}</p> }
        
      </form>


      <small> <p className='mt-3 '>Alreade Have an Account? <Link to="/login"><span className=' text-blue-700 font-bold'>Go To Login</span> </Link></p></small>
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

export default Signup;