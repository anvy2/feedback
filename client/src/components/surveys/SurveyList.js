import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderList = () => {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card light-green lighten-4" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>{' '}
            <br />
            <p className="right">
              Last Responded On:{' '}
              {new Date(survey.lastResponded).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <button
              className="btn-flat teal darken-1 center"
              onClick={() => {
                this.props.deleteSurvey(survey._id);
                this.props.fetchSurveys();
              }}
            >
              Delete
            </button>
            <button className="btn-flat right">No: {survey.no}</button>
            <button className="btn-flat right">Yes: {survey.yes}</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
