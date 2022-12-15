import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { selectUser } from "./features/counter/userSlice";
import Feed from './Feed';
import HEADER from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])

  return (
    <div className="app">
      <HEADER />

      {/* {!user ? (
        <Login />
      ) : ( */}
        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
