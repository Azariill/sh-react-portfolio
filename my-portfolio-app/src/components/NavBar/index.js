import './index.scss';
import {NavLink} from 'react-router-dom';

const NavBar = () =>{

    return(
        <nav className="navbar navbar-expand-sm">
            <a className="navbar-brand" href="/"><h1 className='m-1 px-3'>Scott Heier</h1></a>
          
            <div className="navbar-nav px-5">
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/about">
                <span className="nav-item nav-link px-5 ">About Me</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/projects">
                <span className="nav-item nav-link px-5 " >Projects</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/contact">
                <span className="nav-item nav-link px-5 " >Contact</span>
            </NavLink>
      
            </div>
        
</nav>
    )
};

export default NavBar;