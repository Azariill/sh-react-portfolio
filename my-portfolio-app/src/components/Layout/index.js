import React from 'react';
import './index.scss';
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom';

const Layout = () =>{

    return (
        <main className="background min-100-vh">
            <NavBar/>
         
           
                <Outlet/>
             
          
            
        </main>
    );
}

export default Layout;