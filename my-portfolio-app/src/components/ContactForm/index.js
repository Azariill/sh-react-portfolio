import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  

useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Your Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Doe" name="name"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Contact