import React, { useRef, useState } from 'react';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";
import './Categ.css'


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
    <div>
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
          >
            <source src="/works/mouzmari.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>MOUZMARI</p>
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
          >
            <source src="/works/mmasmr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>MOUZMARI</p>
          </div>

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
          >
            <source src="/works/zeina.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>LOCAL AL ZEINA</p>
          </div>
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
          >
            <source src="/works/mmcrsck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
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
          >
            <source src="/works/mmpck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>MOUZMARI</p>
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
          >
            <source src="/works/mmsteak.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>MOUZMARI</p>
          </div>

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
          >
            <source src="/works/alburda.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>LOCAL AL ZEINA</p>
          </div>
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
          >
            <source src="/works/gwg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
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
          >
            <source src="/works/leadrights.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>MOUZMARI</p>
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
          >
            <source src="/works/sto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>MOUZMARI</p>
          </div>

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
          >
            <source src="/works/aicircle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>GOOGLE AI CIRCLE</p>
          </div>
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
          >
            <source src="/works/redmi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>REDMI 13</p>
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
          >
            <source src="/works/fitness.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>REDMI 13</p>
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
          >
            <source src="/works/s1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="botm">
          <p onClick={toggleMute}>
          {mute ? <AiOutlineMuted />:<AiOutlineSound /> }
          </p>
          <p>REDMI 13</p>
          </div>
          </div>
          </div>



    </div>
  );
}

export default Categ;
