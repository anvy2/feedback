import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h5>Welcome to demo Feedback App.</h5>

        <Link to="/surveys" className="waves-effect waves-light btn-large">
          Dashboard
        </Link>
      </div>
    );
  }
}

export default Landing;
