import './index.scss';
import {NavLink} from 'react-router-dom';


const NavBar = () =>{

    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/"><h1 className='m-1 px-3'>Scott Heier</h1></a>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

          <div className='collapse navbar-collapse' id="navbarNav">
            <div className="navbar-nav d-flex justify-content-end px-5 w-100">
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/about">
                 <span className="nav-lin  active px-3">About Me</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/projects">
                <span className="nav-item  active px-3 " >Projects</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" style={{textDecoration: 'none'}} to="/contact">
                <span className="nav-item  active px-3" >Contact</span>
            </NavLink>
            
      
            </div>
            </div>
        
</nav>
    )
};

export default NavBar;