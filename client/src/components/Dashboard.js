import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
  renderCreateButton = () => {
    if (this.props.auth !== false && this.props.auth !== null) {
    }
    if (this.props.auth === false) {
      return (
        <div className="card-content center-align">
          <h4>Please login to continue!</h4>
        </div>
      );
    } else if (this.props.auth === null) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }
    return (
      <div className="fixed-action-btn">
        <Link to="/surveys/new/" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  };
  render() {
    return (
      <div>
        <SurveyList />
        {this.renderCreateButton()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Dashboard);
