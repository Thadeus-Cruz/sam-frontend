import React from 'react';
import '../../Assets/Styles/User/tutorial.css'; // Make sure to create and import your CSS
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
const Tutorial = () => {
  return (
    <div >
      <NavBar />
      <div style={{position:'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-1'}}>
      <div className='background-img-color'></div>
      <div className='background-img'></div>
      </div>
      <div className='tutorial-body'>
  <b><h1 className='title'>Repair Guides</h1></b>
  <a href="https://www.pearsonhighered.com/assets/samplechapter/0/1/3/5/0135232864.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7561180/pexels-photo-7561180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Engine Problems</h1>
    </div>
    <div className="back">
      <h2>Engine Problems</h2>
      <p>Learn how to identify and repair typical engine problems such as overheating, misfires, and oil leaks.</p>
    </div>
  </div>
  </a>
  <a href="https://qualifications.pearson.com/content/dam/pdf/BTEC-Nationals/Vehicle-Technology/2007/Specification/314908_U15_Heavy_Vehicle_Braking_Systems.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Brake Repairs</h1>
    </div>
    <div className="back">
      <h2>Brake Repairs</h2>
      <p>Follow this guide to safely replace your brake pads and rotors, ensuring optimal braking performance.</p>
    </div>
  </div>
  </a>
  <a href="https://za.pearson.com/content/dam/region-growth/south-africa/pearson-south-africa/TVET/newReport191Titles/documents/9781485717386_Electrical_Trade_Theory_N2_sample_chapter.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8556051/pexels-photo-8556051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Electrical Diagnosing</h1>
    </div>
    <div className="back">
      <h2>Electrical Diagnosing</h2>
      <p>Discover techniques for diagnosing and repairing common electrical issues like faulty wiring and dead batteries.</p>
    </div>
  </div>
  </a>
  <a href="https://www.tezu.ernet.in/sae/Download/transmission.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Transmission Fluid</h1>
    </div>
    <div className="back">
      <h2>Transmission Fluid</h2>
      <p>Learn how to change transmission fluid and identify issues like slipping or rough shifting in your vehicle.</p>
    </div>
  </div>
    </a>
  <br />
  <br />
  <h1 className='title'>Video Tutorial</h1>
  <a href="https://www.youtube.com/watch?v=Ww2fygySJl4" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Suspension Repairs</h1>
    </div>
    <div className="back">
      <h2>Suspension Repairs</h2>
      <p>Watch expert mechanics demonstrate how to replace shocks and struts to improve ride quality and handling.</p>
    </div>
  </div>
  </a>
  <a href="https://www.youtube.com/watch?v=NSUeRlJ2P0g" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/10611959/pexels-photo-10611959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Air Conditioning</h1>
    </div>
    <div className="back">
      <h2>Air Conditioning</h2>
      <p>Follow along as professionals show you how to recharge your car's AC system for optimal cooling performance.</p>
    </div>
  </div>
  </a>
  <a href="https://youtu.be/lqd-A6bteqw?feature=shared" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://d2m3nfprmhqjvd.cloudfront.net/blog/20220921185940/battery-replacement-1160x773.jpeg)' }}>
      <h1 className="text-shadow">Battery Replacement</h1>
    </div>
    <div className="back">
      <h2>Battery Replacement</h2>
      <p>Learn the proper steps for removing an old battery and installing a new one to ensure reliable vehicle startup.</p>
    </div>
  </div>
  </a>
  <a href="https://youtu.be/j00C9FMlgIw?feature=shared" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8986177/pexels-photo-8986177.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
      <h1 className="text-shadow">Tire Maintenance</h1>
    </div>
    <div className="back">
      <h2>Tire Maintenance</h2>
      <p>See how mechanics rotate and balance tires to extend their lifespan and improve vehicle stability.</p>
    </div>
  </div>
  </a>
  <h1 className='title'>How to Article</h1>
  <a href="https://example.com/oil_change.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Oil Change</h1>
    </div>
    <div className="back">
      <h2>Oil Change</h2>
      <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/brakes.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/mechanic-changing-the-air-filter-on-a-car-royalty-free-image-1594045393.jpg?resize=1200:*)' }}>
      <h1 className="text-shadow">Replacing Air Filters</h1>
    </div>
    <div className="back">
      <h2>Replacing Air Filters</h2>
      <p>Swap out old air filters by locating them in the engine compartment and installing new ones to ensure optimal engine performance.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/ocean.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
      <h1 className="text-shadow">Replacing Headlights</h1>
    </div>
    <div className="back">
      <h2>Replacing Headlights</h2>
      <p>Follow the guide to safely remove old headlights and install new ones for improved visibility and enhanced vehicle appearance.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/angular.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/13627465/pexels-photo-13627465.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
      <h1 className="text-shadow">Checking the Silencer</h1>
    </div>
    <div className="back">
      <h2>Checking the Silencer</h2>
      <p>Understand how to inspect and maintain your vehicle's silencer to reduce noise and ensure optimal exhaust performance.</p>
    </div>
  </div>
<Footer />
</a>
</div>
      </div>
  );
};

export default Tutorial;
