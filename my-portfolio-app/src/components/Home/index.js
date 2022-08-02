import React, { useEffect, useState } from 'react';
import './index.scss';
import spaceManSwingImage from '../../assets/images/SpaceSwing.png';
import AnimatedLetters from '../AnimatedLetters'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S','c','o','t','t',' '];
    
   
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <section className='hero-section d-flex justify-content-center align-items-center vh-100'>
        <div className=" d-flex align-items-center justify-content-center">
          {/* Main Hero content */}
            <div className="hero-content d-flex flex-column align-items-center" >
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,&nbsp; </span>
               
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>&nbsp;
                <AnimatedLetters letterClass={letterClass} 
                                 strArray={nameArray}
                                 idx = {15} />
                                 
                </h1>
                <h2>FullStack Developer / JavaScript Expert</h2>
                <div className='contact-btns'>
                    <button className='contact-me-btn mt-3'>Contact me</button>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/scott-heier-224a40224/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </div>
            </div>
            <img src={spaceManSwingImage} alt ='man is spacesuit'/>
        </div>
           {/* divs for the animated stars/particles */}
           <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </section>
    )
};

export default Home;