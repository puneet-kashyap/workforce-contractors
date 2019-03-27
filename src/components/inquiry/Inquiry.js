import React from 'react';
import { reduxForm } from 'redux-form';
import './inquiry.css';
import InquiryForm from './InquiryForm';

class Inquiry extends React.Component {
  render() {
    return <InquiryForm />;
  }
}

export default reduxForm({
  form: 'inquiryForm',
})(Inquiry);
