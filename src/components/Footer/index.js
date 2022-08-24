import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
        <> <footer className="footer">
             <ul className="footer-list d-flex flex-row justify-content-between">
                <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/scott-heier-224a40224/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
              </li>
              <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Azariill/"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
              </li>
              <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/Azarill"
              >
                <FontAwesomeIcon icon={faFreeCodeCamp} color="#4d4d4e" />
              </a>
              </li>
              <li id='createdBy'>created by: scott heier 2022</li>
             </ul>
            </footer></>
    )
}

export default Footer;