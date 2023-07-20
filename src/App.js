import {ChatIcon} from "./svg";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./Pages";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/userSlice";

function App() {
  
  const {user} = useSelector(state=> state.user);
  console.log(user);
  return (
    <div className="dark">
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
