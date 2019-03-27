import React from 'react';
import { rentalReasons, aboutUs } from './rentalReasons';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="aboutUs">
          {aboutUs.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div>
          <h2>Top ten reasons to rent:</h2>
          <div className="rent-reasons">
            {rentalReasons.map((reason, index) => {
              return (
                <div key={index} className="reason">
                  <span className="title">
                    {reason.id}. {reason.title}
                  </span>
                  <span>{reason.reason}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
