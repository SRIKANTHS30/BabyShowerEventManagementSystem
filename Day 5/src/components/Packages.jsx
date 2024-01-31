import React from 'react';
import '../components/Packages.css';
const Packages= () => {
  return (
    <div className="baby-show">
      <h1>Baby Show X</h1>
      <p>Affordable Party Packages</p>
      <div className="pricing-table">
        <div className="package basic">
          <h2>Basic</h2>
          <p>$300</p>
          <ul>
            <li>Party planning</li>
            <li>Party styling</li>
            <li>Party catering</li>
            <li>1 hour entertainer show</li>
            <li>Face painters</li>
          </ul>
          <button>Buy Now</button>
        </div>
        <div className="package standard">
          <h2>Standard</h2>
          <p>$500</p>
          <ul>
            <li>Party planning</li>
            <li>Party styling</li>
            <li>Party catering</li>
            <li>2 hour entertainer show</li>
            <li>Face painters</li>
            <li>Balloon modellers</li>
          </ul>
          <button>Buy Now</button>
        </div>
        <div className="package premium">
          <h2>Premium</h2>
          <p>$800</p>
          <ul>
            <li>Party planning</li>
            <li>Party styling</li>
            <li>Party catering</li>
            <li>4 hour entertainer show</li>
            <li>5 additional fun possibilities</li>
          </ul>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Packages;