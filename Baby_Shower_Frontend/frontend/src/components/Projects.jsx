import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../components/Projects.css';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/baby.jpg'
import image4 from '../assets/image5.jpg'
import image5 from '../assets/image3.jpg'
import image6 from '../assets/image4.jpg'
const Cards = () => {
  return (
    <div className='b1'>
    <div className="container1">
      <div className="row align-items-center g-xl-3 g-lg-3 g-md-3 g-3">
        <div className="col-md-4">
          <div className="content">
              <div className="content-overlay"></div>
              <img src={image1} className="content-image"></img>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Twins Baby Shower</h3>
              </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="content">
            <a href="#">
              <div className="content-overlay"></div>
              <img src={image2} className="content-image"></img>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Gender Reveal Baby Shower</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="content">
            <a href="#">
              <div className="content-overlay"></div>
              <img src={image4} className="content-image" style={{height:370}}></img>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Nursery rhyme Baby Shower</h3>
                
              </div>
            </a>
          </div>
        </div>


        <div className="col-md-4">
          <div className="content">
            <a href="#">
              <div className="content-overlay"></div>
              <img src={image3} className="content-image"></img>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Girl Baby Shower</h3>
    
              </div>
            </a>
          </div>
        </div>


        <div className="col-md-4">
          <div className="content">
            <a href="#">
              <div className="content-overlay"></div>
              <img src={image5} className="content-image" style={{height:370,width:460}}></img>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Surprise Events</h3>
              </div>
            </a>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="content">
            <a href="#">
              <div className="content-overlay"></div>
              <img src={image6} className="content-image"></img>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Boy Baby Shower</h3>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Cards;
