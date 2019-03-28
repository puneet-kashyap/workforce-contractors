import React from 'react';
import Card from '@material-ui/core/Card';

import './contact.css';
import businessman from '../../images/businessman';

class Contact extends React.Component {
  contact = {
    name: 'Rajan Kumar',
    phone: '+1-562-867-5309',
    email: 'rajan@workforcecontractors.com',
    addresses: ['Shop No. 123, Masurwal', 'Kapurthala, Punjab, India'],
    gMap:
      'pb=!1m14!1m8!1m3!1d6813.0057348019955!2d75.40118!3d31.372695000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a5b77d1d2aa81ba!2sCitiMax+Enterprises!5e0!3m2!1sen!2sca!4v1553787125874'
  };
  render() {
    return (
      <div className="contact">
        <div>
          <h1>Contact</h1>
          <div className="card">
            <Card>
              <h2>{this.contact.name}</h2>
              <img className="contact-image" src={businessman} alt="" />
              <div className="contact-details">
                <p>
                  {this.contact.addresses.map(address => {
                    return <span>{address}<br /></span>;
                  })}
                </p>
                <div>
                  <a href={`tel:${this.contact.phone}`}>{this.contact.phone}</a>
                </div>
                <div className="email">
                  <a href={`mailto: ${this.contact.email}`}>
                    {this.contact.email}
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <iframe
            className="google-map"
            title="map"
            allowFullScreen
            src={`https://www.google.com/maps/embed?${this.contact.gMap}`}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
