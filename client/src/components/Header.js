import M from 'materialize-css/dist/js/materialize.min';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';


class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return null;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="4">
            <a className="waves-effect white-text btn-flat">
              <i className="material-icons left">account_circle</i>
              {this.props.auth.fname}
            </a>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };renderContentsidenav = () => {
    switch (this.props.auth) {
      case null:
        return null;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="4">
            <a className="btn-flat">
            <i className="material-icons left">account_circle</i>
              {this.props.auth.fname}
            </a>
          </li>,
          <li key="1">
            <a className="btn">
            <Payments />
            </a>
          </li>,
          <li key="3" >
            <a className="btn"> Credits: {this.props.auth.credits} </a>
          </li>,

          <li key="2">
            <a href="/api/logout" className="btn">Logout</a>
          </li>,
        ];
    }
  };

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        edge: "left",
      });
    });
  }

  render() {
    return (
      <div>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <Link to="/" className="brand-logo">
            Emaily
          </Link>
          <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">{this.renderContent()}</ul>

        </div>
      </nav>
        <ul className="sidenav" id="mobile-demo" >{this.renderContentsidenav()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
