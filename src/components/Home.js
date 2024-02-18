import React from 'react'
import './Home.css'
import { Image, Button, Nav } from 'react-bootstrap'
import azeemprofile from '../assets/azeemprofile.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from '../assets/Resume.pdf'
import {
    faFacebook,
    faGithub,
    faLinkedin,
    faPinterest,
    faXTwitter,
  } from "@fortawesome/free-brands-svg-icons";


  const github = "https://github.com/Jamz47";
  const xtwitter =  "https://twitter.com/azeemrafique471"
  const linkedin = "https://www.linkedin.com/in/azeem-rafique-856970194/"
  const Pinterest = "https://pin.it/5jNM3rtiI";
  const Facebook = "https://www.facebook.com/hulk.azeem/"

const Home = () => {
    const githubLink = () => {
        window.location.href = github;
      };
    const Xtwitter = ()=>{
        window.location.href = xtwitter;
    }
    const linkedIn = ()=>{
        window.location.href = linkedin
    }
    const pinterest = ()=>{
        window.location.href = Pinterest
    }
    const faceBook = ()=>{
        window.location.href = Facebook;
    }
    const handleDownload = () => {
      const fileUrl = process.env.PUBLIC_URL + Resume;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div className='hom-container'>
        <div><h1 className='head-title'>Hi!</h1>
      <h1 className='head-title'>I am Azeem Rafique</h1>
      <h1 className='head-title'>MERN | React.Js Developer</h1>
      <div className='btns-arrange'>
      <FontAwesomeIcon icon={faGithub} className="fa-icons-git" onClick={githubLink}/>
        <FontAwesomeIcon icon={faXTwitter} className="fa-icons-x" onClick={Xtwitter} />
        <FontAwesomeIcon icon={faLinkedin} className="fa-icons-In" onClick={linkedIn}/>
        <FontAwesomeIcon icon={faPinterest} className="fa-icons-P" onClick={pinterest} />
        <FontAwesomeIcon icon={faFacebook} className="fa-icons-fb"  onClick={faceBook}/>
        
      </div>
      <div className='disss'>
      <div>
        <Nav.Link  href='/contact'> <Button  variant="outline-primary"><i className="fa fa-phone" /> Hire Me</Button></Nav.Link>
        </div>
       <div>
        <Button className='resbutton' variant="outline-warning" onClick={handleDownload}>
          <i className="fa fa-download"/> Download Resume</Button>
        </div>
        </div>
        
  
      </div>
      <div className='img-background'>
        <Image className='profile-img' src={azeemprofile} alt='profile'  />
        
      </div>
    </div>
    
  )
}

export default Home
