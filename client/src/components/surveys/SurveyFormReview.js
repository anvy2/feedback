import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import formFields from '../../utils/formFields';
import { submitSurvey } from '../../actions';
import { useToasts } from 'react-toast-notifications';

const SurveyReview = ({
  onCancel,
  formValues,
  submitSurvey,
  history,
  credits,
}) => {
  const { addToast } = useToasts();
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => {
          if (credits < 1) {
            addToast('Not enough Credits', {
              appearance: 'warning',
              autoDismiss: true,
            });
          } else {
            submitSurvey(formValues, history);
          }
        }}
        className="green btn-flat right white-text"
        type="submit"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values,
    credits: state.auth.credits,
  };
};

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyReview)
);
