import './index.scss';
import {NavLink} from 'react-router-dom';
import { useEffect } from 'react';


const NavBar = ({currentNavItem, setCurrentNavItem,navSelected,setNavSelected}) =>{

    useEffect(() =>{
        document.title = currentNavItem;
    })

    return(
        <nav className="navbar navbar-expand-lg">
        <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/">
            <span className="navbar-brand"><h1 className='m-1 px-3'>Scott Heier</h1></span>
        </NavLink>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

          <div className='collapse navbar-collapse' id="navbarNav">
            <div className="navbar-nav d-flex justify-content-end px-5 w-100">
            <NavLink exact="true" style={{textDecoration: 'none'}} to="/about">
                 <li id="#aboutNav" className={`nav-lin px-3 ${navSelected === "About" && 'activeNav'}`}><span onClick={()=> setNavSelected("About")}>About Me</span></li>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/projects">
                <li className={`nav-lin px-3 ${navSelected === "Projects" && 'activeNav'}`}><span onClick={()=> setNavSelected("Projects")}>Projects</span></li>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/contact">
                <li className={`nav-lin px-3 ${navSelected === "Contact" && 'activeNav'}`}><span onClick={()=> setNavSelected("Contact")}>Contact</span></li>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/resume">
                <li className={`nav-lin px-3 ${navSelected === "Resume" && 'activeNav'}`}><span onClick={()=> setNavSelected("Resume")}>Resume</span></li>
            </NavLink>
            
      
            </div>
            </div>
        
</nav>
    )
};

export default NavBar;