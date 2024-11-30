import React from 'react';
import '../../Assets/Styles/User/AboutUs.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import thadeusImage from '../../Assets/Images/thadeus.png';
import abishekImage from '../../Assets/Images/abishek.png';
import sriramImage from '../../Assets/Images/sriram.png';
import prabhaImage from '../../Assets/Images/prabha2.png';

const TeamMember = ({ imgSrc, name, role, linkedin }) => (
  <div className="aboutus-team-member">
    <div className="aboutus-pic">
      <img src={imgSrc} alt="team member" className="aboutus-img-responsive" />
    </div>
    <div className="aboutus-content">
      <h3 className="aboutus-title">{name}</h3>
      <span className="aboutus-post">{role}</span>
      <ul className="aboutus-social">
        <li><a href="https://www.linkedin.com/in/thadeus-cruz-govindapillai/" target='_blank'><FaLinkedin /></a></li>
        <li><a href="https://www.instagram.com/thadeuscruzg?igsh=MXQ5ZWt2anQ2M2xmYg=="><FaInstagram /></a></li>
        <li><a href="https://github.com/Thadeus-Cruz"><FaGithub /></a></li>
      </ul>
    </div>
  </div>
);

const AboutUs = () => (
    <div>
        <div className="aboutus-body"></div>
        <div className='aboutus-body-color'></div>
        <div className="aboutus-body-content">Introducing the PIT STOP Crew
            <p >The Future of Automotive </p><p style={{ color: 'white', fontSize: '20px' }}>(Hover or Tap to reveal)</p>
        </div>
        <NavBar />
        <div className="aboutus-container">
            <div className="aboutus-row">
                {/* <div className="aboutus-col">
                    <TeamMember 
                        imgSrc={prabhaImage}
                        name="Prabhakaran S" 
                        role="Web Developer" 
                    />
                </div> */}
                <div className="aboutus-col" style={{alignItems: 'center'}}>
                    <TeamMember 
                        imgSrc={thadeusImage} 
                        name="Thadeus Cruz Govindapillai" 
                        role="Full Stack Developer" 

                    />
                </div>
                {/* <div className="aboutus-col">
                    <TeamMember 
                        imgSrc={abishekImage}
                        name="Abishek A" 
                        role="Web Developer" 
                    />
                </div>
                <div className="aboutus-col">
                    <TeamMember 
                        imgSrc={sriramImage}
                        name="Sriram P" 
                        role="Web Developer" 
                    />
                </div> */}
            </div>
        </div>
        <Footer />
    </div>
);

export default AboutUs;
