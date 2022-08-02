import './index.scss';

const NavBar = () =>{

    return(
        <nav className="navbar navbar-expand-sm">
            <a className="navbar-brand" href="/"><h1 className='m-1 px-3'>Scott Heier</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav px-5">
                <a className="nav-item nav-link px-5 " href="#">Projects</a>
                <a className="nav-item nav-link px-5 "  href="#">About</a>
                <a className="nav-item nav-link px-5 " href="#">Contact</a>
      
            </div>
        </div>
</nav>
    )
};

export default NavBar;