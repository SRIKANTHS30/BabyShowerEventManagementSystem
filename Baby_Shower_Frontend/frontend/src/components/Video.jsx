import React from 'react';
import './Video.css';

const Video = () => (
  <div className="how-to-host-baby-shower">
    <h1 className="title4">How To Host A Beautiful Baby Shower</h1>
    <div className="content-container">
      <div className="text-content">
        <p className="subtitle">
          We all know that. But what you may not know is that she is also a saint!
          She offered to throw one of her nail clients a baby shower and really
          put something beautiful together.
        </p>
      </div>
      <div className="video-content">
        {/* Add your video component or embed code here */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your_video_id"
          title="Embedded Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

export default Video;
