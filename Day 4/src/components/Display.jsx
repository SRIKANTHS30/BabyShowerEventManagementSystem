import React from 'react';
import '../components/Display.css';
import logo1 from '../assets/cake.gif';
import logo2 from '../assets/balloons.gif';
import logo3 from '../assets/gift.gif';
import logo4 from '../assets/booking.gif';
import Navbar from './Nav';

const Display = () => {
  return (

    <div className='bac2'>
      <section className="he1">
        <p className='p1'>~~~ Service ~~~</p>
        <h2 className='he2'>Our Favorite Projects</h2>
      </section>
      <div className="inner-wrap">
        <section className="zig-zag">
          <div className="mfflop">
            <div className="divbox">
              <span className="zig-zag"></span>
              <div className="divimg">
                <img src={logo1} className="img1" alt="Menu Planning" />
              </div>
              <div className="divttl">Menu Planning</div>
              <div className="divpara">When planning the food and beverage for any event, it's important to consider a successful program and a delicious meal.</div>
            </div>
            <div className="divbox">
              <div className="divimg">
                <img src={logo2} className="img1" alt="Decorations" />
              </div>
              <div className="divttl">Decorations</div>
              <div className="divpara">We know every client is different and every event is a new and exciting challenge.</div>
            </div>
            <div className="divbox">
              <div className="divimg">
                <img src={logo3} className="img1" alt="Props and Prizes" />
              </div>
              <div className="divttl">Props and Prizes</div>
              <div className="divpara">Event planners dedicate their lives to executing the events of their clients’ dreams, and such a task is grounds for giving them.</div>
            </div>
            <div className="divbox">
              <div className="divimg">
                <img src={logo4} className="img1" alt="Instant Booking" />
              </div>
              <div className="divttl">Instant Booking</div>
              <div className="divpara">
                "For selected event, book with just a couple of clicks"
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  );
};

export default Display;
