import React, { Component } from 'react';
import { connect } from 'react-redux';

import SurveyForm from './surveys/SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
