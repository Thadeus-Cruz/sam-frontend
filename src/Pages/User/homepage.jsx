import React from 'react';
import '../../Assets/Styles/User/homepage.css';
import NavBar from '../../Components/NavBar';
import ScrollDownArrow from '../../Components/ScrollDownArrow';
import homeVideo from '../../Assets/Videos/home-video.mp4'; 
import Footer from '../../Components/Footer';

const HomePage = () => {
  return (
    <div>
      <div className='homepage-body'>
        <div className='homeimagebgcolor'>
          <div className='bg-image'></div>
        </div>
        <NavBar />
        <div className='homepage-text1'>WELCOME TO THE PIT STOP</div>
        <div className='homepage-text2'>Where Every Vehicle Leaves Like a Star on the Road!</div>
        <ScrollDownArrow />
        <div style={{position: 'absolute', top: '150vh', left: '50vw', transform: 'translate(-50%, -50%)', color: 'white'}}>
          <h1>Sample Test</h1>
        </div>
      </div>
      <div className="homepage-video">
        <video src={homeVideo} autoPlay loop muted></video>
      </div>
      <div className="homepage-text3">
        Did you know?
        <br/> Some luxury cars have built-in self-healing paint that can repair minor scratches on its own.
      </div>
      <div className="homepage-emergency">
        <div className='homepage-emergency-text'>Emergency Car Tips</div>
        <ul className='emergency-list'>
          <li>Pull over to a safe location, use the jack to lift the car, remove the flat tire with the lug wrench, and replace it with the spare.</li>
          <li>Carry a set of jumper cables or a portable jump starter to revive a dead battery.</li>
          <li>Keep a gallon of coolant or water to manage an overheating engine.</li>
          <li>Know how to use your parking brake and downshift if you experience brake failure.</li>
          <li>Check fuel level, battery connections, and ignition if your engine won't start.</li>
          <li>Shift into neutral and apply brakes if the accelerator gets stuck.</li>
          <li>Carry spare fuses and know where the fuse box is to replace a blown fuse.</li>
          <li>Use an emergency belt repair kit if you encounter a broken belt.</li>
          <li>Keep a spare key hidden or with a trusted person to avoid being locked out.</li>
          <li>Stop immediately and check for fuel leaks if you smell gasoline, and call for assistance.</li>
        </ul>
      </div>
      <div className='homepage-emergency-button'>
        <div className='homepage-emergency-button-overtext'>Diagnose Problems<br/></div>
        
        <a className="slide-button slide-arrow" href="/services">
          Diagnose
        </a>
      </div>
      <Footer style={{top: '250vh'}} />
    </div>
  );
};

export default HomePage;
