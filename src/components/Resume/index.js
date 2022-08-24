import './index.scss';
import Footer from '../Footer';
import myResume from '../../assets/documents/resume.pdf';
import { Document, pdfjs, Page } from "react-pdf";
import {Link} from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () =>{

  
 
    return (
        <>
        <section className='resume-section d-flex flex-row justify-content-center '>
            
          
            <Document file={myResume}>
                <Page pageNumber={1} />
               
            </Document>
            <Link
                to="route"
                onClick={(event) => { event.preventDefault(); window.open(myResume); }}
                style={{textDecoration: 'none'}}
                >
                    
                <div className='download-div m-4 p-4'>Click to download</div>
                
            </Link>
            

           
            <Footer/>
            
        </section>
        
        </>
        
    )
};


export default Resume;