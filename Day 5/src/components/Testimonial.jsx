import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalf as halfStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonial.css'; // Include your CSS file if needed
import '../assets/cardBac.png'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonial-inner">
        <h1>Testimonial</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="name">John Waddrob</div>
              <div className="stars">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint
                odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="name">John Waddrob</div>
              <div className="stars">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={halfStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint
                odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="name">John Waddrob</div>
              <div className="stars">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint
                odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
