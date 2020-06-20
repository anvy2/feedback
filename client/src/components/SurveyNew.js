import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SurveyForm from './surveys/SurveyForm';
import SurveyReview from './surveys/SurveyFormReview';
import { ToastProvider } from 'react-toast-notifications';

class SurveyNew extends Component {
  state = { showReview: false };
  renderContent = () => {
    if (this.state.showReview) {
      return (
        <SurveyReview onCancel={() => this.setState({ showReview: false })} />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  };
  render() {
    return (
      <div>
        <ToastProvider autoDismissTimeout="2000">
          {this.renderContent()}
        </ToastProvider>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
