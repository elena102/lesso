import React from "react";
import { NavLink, Outlet} from 'react-router-dom'

function MainPage () {
    return (
      <>
    <header style={{textAlign: 'center', fontSize: '20px', background: 'pink', width: '100%', lineHeight: '50px'}}>
     
      <NavLink to={'/Chat'}>Cписок чатов</NavLink>
      <NavLink to={'/Profile'}>Cтраница профиля</NavLink>
       
    </header>
    <div>
      <Outlet />
    </div>
      </>
    );
  }
  
  export default MainPage;