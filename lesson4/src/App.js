import {Routes, Route, Link, NavLink} from 'react-router-dom'
import React from 'react';
import HomePage from './pages/HomePage';
import Chat from './pages/Chat';
import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/mainPage';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element = {<MainPage/>}>
     <Route index element = {<HomePage/>}/>
     <Route path='/Chat' element = {<Chat/>}/>
     <Route path='/Profile' element = {<ProfilePage/>}/>
     <Route path='*' element = {<NotFound/>}/>
      </Route>
     </Routes>
      </>
    </div>
  );
}

export default App;
