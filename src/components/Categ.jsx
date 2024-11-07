import React, { useRef, useState } from 'react';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";
import './Categ.css'
import './display.css'



function Categ() {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setMute(!mute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className='works'>
      <p>//WORKS</p>
      <p>1-FOOD</p>
      <div className="food">
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/NBHDv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p>THE NBHD</p>
          </div>

        </div>
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/mouzmari.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/mmasmr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
      <div className="alz">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/zeina.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="food">
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/mmcrsck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/mmpck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/mmsteak.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <p>EVENTS</p>
      <div className="alz">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/alburda.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      
      <p>AUTOMOTIVES</p>
      <div className="food">
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/gwg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/leadrights.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/sto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <p>TECH AND OTHERS</p>
      <div className="alz">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/aicircle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="tech">

<div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/redmi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
</div>
<div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/fitness.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="nbhd">
          <video
            preload="auto"
            className="disvideo"
            autoPlay
            muted={mute} // Start with muted initially
            loop
            ref={videoRef}
            controls
          >
            <source src="/works/s1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          </div>
          </div>



    </div>
  );
}

export default Categ;
