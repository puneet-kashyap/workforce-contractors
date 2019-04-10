import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { DatePicker } from 'material-ui-pickers';
import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import './productForm.css';

const validate = values => {
  const errors = {};
  const requiredFields = ['quantity', 'rental-date', 'return-date'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.quantity && !/^\d*\.{0,1}\d+$/i.test(values.quantity)) {
    errors.quantity = 'Please enter valid number.';
  }

  return errors;
};
const renderTextField = ({
  input,
  label,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    label={label}
    variant="outlined"
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    className="text-field"
    fullWidth
    style={{ marginBottom: '10px' }}
  />
);
const renderDateField = ({
  input,
  label,
  minDate,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <div>
    <DatePicker
      label={label}
      variant="outlined"
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      minDate={minDate}
      autoOk
      showTodayButton
      required
      format="YYYY-MM-DD"
      style={{ marginBottom: '10px' }}
    />
  </div>
);

class ProductForm extends Component {
  state = {
    open: false
  };

  handleSnackbarClose = () => {
    this.setState({ open: false });
  }

  onSubmit = formValues => {
    if (formValues['rental-date'] < formValues['return-date']) {
      console.log(formValues);
      this.setState({ open: true });
    }
  };

  render() {
    const { title, price } = this.props.product;
    return (
      <div>
        <div>
          <h3 className="title">{title}</h3>
        </div>
        <Form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="product-form"
        >
          <div className="rent-price">
            <b>Rent: </b> &#8377; {price} per day
          </div>
          <Field
            name="quantity"
            type="text"
            label="Quantity"
            component={renderTextField}
          />
          <Field
            name="rental-date"
            type="date"
            minDate={new Date()}
            label="Rental Date"
            component={renderDateField}
          />
          <Field name="return-date" type="date" component={renderDateField} />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ margin: '20px' }}
          >
            Add to Cart
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleSnackbarClose}
            message={
              <span className="snackbar-msg">
                <CheckCircleIcon className="icon" />
                {title} added to Cart.
              </span>
            }
          />
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'productForm',
  validate
})(ProductForm);
