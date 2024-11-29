import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import video from '../Assets/Videos/LandingPage.mp4'; // Import the video file
import '../Assets/Styles/LandingPage.css'; // Import the stylesheet

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the register page
    };

    const handleAdminLoginClick = () => {
        navigate('/admin/login'); // Navigate to the admin login page
    };

    // Use a ref to access the video element
    const videoRef = useRef(null);

    // Set the playback rate to 2x when the component mounts
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0; // Set playback speed to 2x
        }

        // Background animation
        let tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 850
        });

        tl.add({
            targets: 'section .item',
            width: '100%',
            backgroundColor: '#FF474C',
            delay: anime.stagger(100)
        });

        tl.add({
            targets: 'section .item',
            delay: anime.stagger(70),
            width: '97%',
            backgroundColor: '#F4E0E1'
        });

        tl.add({
            targets: 'section .item',
            backgroundColor: '#FFFFFF33',
            delay: anime.stagger(50, { from: 'center' })
        });

        tl.add({
            targets: '.text',
            top: '49%',
            duration: 4500,
            opacity: 1
        }, '-=1000');

        // Text animation
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.effect1');
        if (textWrapper) {
            textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");

            anime.timeline()
                .add({
                    targets: '.effect1 .letter',
                    scale: [5, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 1350,
                    delay: function (el, i) {
                        return 70 * i;
                    }
                }, 1500);
        }
    }, []);

    return (
        <div>
            <div className="nav-bar">
                <div className="nav-logo" style={{ fontSize: '40px', fontWeight: 'bold', animation: 'landinglogo 2s ease-in-out forwards' }}>AUTOGARAGE</div>
            </div>
            <div className="landing-video">
                <video ref={videoRef} autoPlay loop muted playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <div className="container">
                    <h1 className="effect1">hello there, welcome!</h1>
                    <p className="text" onClick={handleLoginClick}>Login to Know More</p>
                    <p className="text" style={{textAlign: 'center',letterSpacing: '2px',width: '8vw',marginTop: '35vh',marginLeft: '70vw', fontSize: '20px', backgroundColor:'#222222', padding: '10px', cursor: 'pointer', borderRadius: '10px'}} onClick={handleAdminLoginClick}>Admin Login</p>
                </div>
                <section>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;
