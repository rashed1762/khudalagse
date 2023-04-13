import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homecomp from './Pages/Home/Homecomp';
import Aboutcomp from './Pages/About/Aboutcomp';
import Navcomp from './shared/Navcomp';
import Food from './Pages/Food/Food';
import Cartpage from './Pages/Cart/Cartpage';
import MostOrder from './Pages/Home/MostOrder';
import Logincomp from './shared/Logincomp';
import Signup from './shared/Signup';
import { Toaster } from 'react-hot-toast';
import Privateroute from './PrivateRoute/Privateroute';
import Dhaka from './DivisionFood/Dhaka';
import Mymensingh from './DivisionFood/Mymensingh';
import Sylhet from './DivisionFood/Sylhet';
import Coxbazar from './DivisionFood/Coxbazar';
import Rajsahi from './DivisionFood/Rajsahi';
import Khulna from './DivisionFood/Khulna';
import Gazipur from './DivisionFood/Gazipur';
import Comilla from './DivisionFood/Comilla';
import Rangpur from './DivisionFood/Rangpur';
import Chottogram from './DivisionFood/Chottogram';

function App() {
  return (
    <div className="App">
        <Navcomp></Navcomp>
     <Routes>
      <Route path='/' element={<Homecomp></Homecomp>}></Route>
      <Route path='/about' element={<Aboutcomp></Aboutcomp>}></Route>
      <Route path='/dhaka' element={<Dhaka></Dhaka>}></Route>
      <Route path='/mymnsingh' element={<Mymensingh></Mymensingh>}></Route>
      <Route path='/sylhet' element={<Sylhet></Sylhet>}></Route>
      <Route path='/coxbazar' element={<Coxbazar></Coxbazar>}></Route>
      <Route path='/savar' element={<Aboutcomp></Aboutcomp>}></Route>
      <Route path='/rajsahi' element={<Rajsahi></Rajsahi>}></Route>
      <Route path='/khulna' element={<Khulna></Khulna>}></Route>
      <Route path='/gazipur' element={<Gazipur></Gazipur>}></Route>
      <Route path='/comilla' element={<Comilla></Comilla>}></Route>
      <Route path='/rangpur' element={<Rangpur></Rangpur>}></Route>
      <Route path='/ctg' element={<Chottogram></Chottogram>}></Route>
      <Route path='/food' element={
      <Privateroute>
          <Food></Food>
      
      </Privateroute>
      
      
      }></Route>
      <Route path='/cart' element={<Cartpage></Cartpage>}></Route>
      <Route path='/login' element={<Logincomp></Logincomp>}></Route>
      <Route path='/register' element={<Signup></Signup>}></Route>
      
     </Routes>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
