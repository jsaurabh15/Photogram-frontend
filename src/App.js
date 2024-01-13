import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Homepage from './pages/Homepage/Homepage';
import Message from './pages/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction } from './redux/auth/auth.action';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt-token");
  const {auth} = useSelector(store => store)


  useEffect(() => {
    dispatch(getProfileAction(token));
},[token])


  return (
    <div className="">
      <Routes>
        <Route path="/*" element={auth.user ? <Homepage/> : <Authentication/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/*" element={<Authentication/>} />

      </Routes>
        
    </div>
  );
}

export default App;
