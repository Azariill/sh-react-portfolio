import './index.scss';
import photoOfSelf from '../../assets/images/IMG_2827.JPG'

const AboutMe = () =>{

    return (
        <>
            <section className='about-me d-flex flex-row justify-content-center'>
                <div className='border col-6 d-flex flex-column align-items-center'>
                    <h1>About Me</h1>
                    <p style={{color: "white"}}>Hello My name is Scott and I am FullStack web developer with a passion for technology and love of problem solving. I discovered my love for programming and web development   </p>
                </div>
                <div className='personal-photo-div col-3'>
                    <img className='personal-photo' src={photoOfSelf} alt='myself and my husky'/>
                </div>

            </section>
        </>
    )
}

export default AboutMe;
