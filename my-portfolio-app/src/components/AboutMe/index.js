import './index.scss';
import photoOfSelf from '../../assets/images/IMG_2827.JPG'
import Footer from '../Footer'

const AboutMe = () =>{

    return (
        <>
            <section className='about-me d-flex flex-row flex-wrap justify-content-center' id='about-me-sec'>
                <div className='col-sm-12 col-md-6 d-flex flex-column align-items-center' id='about-me-div'>
                    <h1 id='about-me-h1'>About Me</h1>
                    <p id="about-me-p">
                        Hello My name is Scott and I am FullStack web developer with a passion for technology and love of problem solving. 
                    I've always had a knack for all things computers and technology. I always tinkered around learning things here and there until i decided to take the 
                    leap and sign up for University of Texas at Austins FullStack Bootcamp. Where I ended up falling and love, and now spend my days typing away at my computer.
                       </p>
                </div>
                <div className='personal-photo-div col-sm-12 col-md-4'>
                    <img className='personal-photo' src={photoOfSelf} alt='myself and my husky'/>
                </div>
                <Footer/>
            </section>
            
            
        </>
    )
}

export default AboutMe;
