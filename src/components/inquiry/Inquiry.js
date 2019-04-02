import React from 'react';
import { reduxForm } from 'redux-form';
import './inquiry.css';
import InquiryForm from './InquiryForm';

class Inquiry extends React.Component {
  showResults(values){
    console.log(values)
  }
  render() {
    return <InquiryForm onSubmit={this.showResults}/>;
  }
}

export default reduxForm({
  form: 'inquiryForm',
})(Inquiry);
