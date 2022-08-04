import React,{useState} from 'react';
import './index.scss';
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom';

const Layout = () =>{
    const [currentNavItem, setCurrentNavItem] = useState('Home');
    const [navSelected, setNavSelected] =useState('About');

    return (
        <main className="background">
            <NavBar 
            currentNavItem={currentNavItem} 
            setCurrentNavItem={setCurrentNavItem}
            navSelected={navSelected}
            setNavSelected={setNavSelected}
            />
         
           
                <Outlet/>
             
          
            
        </main>
    );
}

export default Layout;