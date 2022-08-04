import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import spaceMan from '../../assets/images/space.png';
import Loader from 'react-loaders'
import {validateEmail} from '../../utils/helpers';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const [formState, setFormState] = useState({name:'', email:'', message:''});
  const [errorMessage, setErrorMessage] = useState('');
  

useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  function handleChange(e){
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
    else{
        if(!e.target.value.length){
            setErrorMessage(`${e.target.name} is required.`)
        }
        else{
            setErrorMessage('');
        }
    }
    if(!errorMessage){
        setFormState({...formState,[e.target.name]: e.target.value})
    }
}


  
  const sendEmail = (e) => {
    e.preventDefault()
    
    const name = form.current[0].value;
    const email = form.current[1].value;
    const message = form.current[2].value;
if(name && email && message){
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICEID}`,
        'template_toitm7j',
        form.current,
        `${process.env.REACT_APP_USERTOKEN}`
      )
      .then(
        () => {
          window.location.reload(false)
        },
        (err) => {
          alert('Failed to send the message, please try again')
          console.log(err)
        }
      )
    } else{ alert('Please fill out entire form');}
     
  }

  return (
    <>
      <div className="container d-flex flex-row flex-wrap contact-page">
        
          <div className="contact-form  d-flex flex-column align-items-center m-3 col-sm-12 col-md-5 ">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
            <form ref={form} onSubmit={sendEmail} className='p-5'>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Your Name :</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Doe" name="name" onBlur={handleChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address :</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onBlur={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea className="form-control p-5" id="message" rows="3" name="message"onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="mt-5">Submit</button>
            </form>
          </div>
          <div className='img-div col-sm-12 col-md-6'>
            <img className="floatingImg" src={spaceMan} alt='floating guy in space'/>

          </div>
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default Contact