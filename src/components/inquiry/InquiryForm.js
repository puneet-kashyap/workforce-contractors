import React from 'react';
import { Field, Form } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { reduxForm } from 'redux-form';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    variant="outlined"
    errorText={touched && error}
    {...input}
    {...custom}
    className="text-field"
    fullWidth
    required
    style={{marginBottom: "10px"}}
  />
);

class InquiryForm extends React.Component {

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <div className="inquiry">
        <Card className="inquiryCard">
          <h1>Inquiry</h1>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="name"
              type="text"
              id="first-name"
              label="Your Name"
              component={renderTextField}
            />
            <Field
              name="phone"
              label="Your Phone No."
              component={renderTextField}
            />
            <Field
              name="comments"
              label="Comments"
              multiline={true}
              rows="5"
              component={renderTextField}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ margin: '20px' }}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default reduxForm({
  form: 'inquiryForm'
})(InquiryForm);
