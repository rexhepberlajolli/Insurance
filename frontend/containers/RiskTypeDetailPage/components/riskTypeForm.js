import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import TextField from '../../../components/TextField';

const fieldTypes = {
  text: TextField
};

class RiskTypeForm extends Component {
  static propTypes = {
    riskFields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.string,
        ),
      })
    ).isRequired,
    // error: PropTypes.any,
    handleSubmit: PropTypes.func,
    // submitting: PropTypes.any,
  };

  render() {
    const {
      // error,
      handleSubmit,
      // submitting,
      riskFields
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          {
            riskFields.map((riskField) => (
              <div className="col-md-6" key={riskField.name}>
                {
                  (riskField.type in fieldTypes) ? (
                    <Field
                      name={riskField.name}
                      label={riskField.name}
                      component={fieldTypes[riskField.type]}
                    />
                  ) : null
                }
              </div>
            ))
          }
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'riskTypeForm',
})(RiskTypeForm);
