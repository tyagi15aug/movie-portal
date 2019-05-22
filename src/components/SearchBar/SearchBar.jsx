import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, TextField } from "@material-ui/core";

import './SearchBar.css';

const renderTextField = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={touched && error}
    {...input}
    {...custom}
  />
)

const required = value => value ? undefined : 'Required'

class SearchBarForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="searchBarContainer">
        <Field
          name="query"
          type="text"
          component={renderTextField}
          label="Movie Name"
          validate={[ required ]}
        />
        <Field name="type" type="text" component={renderTextField} label="Type" />
        <Field name="year" type="number" component={renderTextField} label="Year" />
        <Button type="submit" variant="outlined" color="primary">Search</Button>
      </form>
    );
  }
}

export const SearchBar = reduxForm({
  form: "searchBar"
})(SearchBarForm);
