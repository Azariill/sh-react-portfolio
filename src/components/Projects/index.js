import './index.scss';
import projectArr from './projects.json';
import Footer from '../Footer';


const Projects = () =>{

    



    return(
       <>
        <section className=' d-flex  flex-wrap justify-content-center ' id='project-section'>
       
           {
            projectArr.map(({name,repolink,imgName})=>(
                <div key={name} className='project-container col-5 mx-5 my-5'>
                    <a  href={repolink} target="_blank" rel="noreferrer" className="project-link text-white bg-light  ">
                            <h2 className="project-title">{name}</h2>
                            <img className="proj-img" src={require(`../../assets/images/${imgName}`)} alt="test test test"/>
                        
                        
                        
                        
                    </a>
                    
                </div>
                

            ))
               
            }
           <Footer></Footer>
        </section>
        
        
       </>

        
    )
}

export default Projects;