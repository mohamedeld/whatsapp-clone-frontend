import {ChatIcon} from "./svg";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./Pages";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="dark">
      <button onClick={()=> dispatch(logout())}>Logout</button>
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
