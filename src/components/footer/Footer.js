import React from 'react';
import './footer.css';

class Footer extends React.Component {
  phoneNumber = '+91 111-222-3333';
  emailAddress = 'rent@workforcecontractors.com';

  render() {
    return (
      <>
        <footer>
          <div className="footer">
            <div className="name">Rajan Kumar</div>
            <div className="contact-option">
              <a className="phone" href={`tel:${this.phoneNumber}`}>
                {this.phoneNumber}
              </a>
            </div>
            <div className="contact-option">
              <a className="email" href={`mailto:${this.emailAddress}`}>
                {this.emailAddress}
              </a>
            </div>
          </div>
        </footer>
        {subFooter(this.emailAddress)}
      </>
    );
  }
}

const subFooter = email => {
  return (
    <div className="footer-below">
      <div>
        Copyright &copy; Workforce Contractors {new Date().getFullYear()}
      </div>
      <div>
        Built with{' '}
        <span role="img" aria-label="heart">
          💖
        </span>
        by the
        <a style={{ color: 'white' }} href={`mailto:${email}`}>
          Kashyap
        </a>
        team
      </div>
    </div>
  );
};

export default Footer;
