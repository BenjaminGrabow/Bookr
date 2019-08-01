import React from 'react';
import { connect } from 'react-redux';
import { checkUserPreference, safeUserPreferences, updateUserPreference } from '../../../Store/actions';
import './user.scss';
import { NavLink } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      photo: '',
      inputForStart: false,
    }
  }

  componentDidMount = () => {
    this.props.checkUserPreference()
  };

  startUserPreference = () => {
    this.setState({
      inputForStart: true
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  safePreferences = () => {
    if (this.state.firstname &&
      this.state.lastname &&
      this.state.photo
    ) {

      this.props.safeUserPreferences(this.state.firstname, this.state.lastname, this.state.photo);

      this.setState({
        firstname: '',
        lastname: '',
        photo: '',
        inputForStart: false,
      });
    }
  };

  updateUserPreference = () => {
    this.props.updateUserPreference(this.state.firstname, this.state.lastname, this.state.photo);

    this.setState({
      firstname: '',
      lastname: '',
      photo: '',
      inputForStart: false,
    });
  };

  render() {
    if (this.props.userData) {
      return this.props.userData.map((user, index) => {
        return <div
          className="user"
          key={index}>
          <NavLink
            to="/bookr"
            className="navLink">
            <p>Home</p>
          </NavLink>
          <div
            className={!this.state.inputForStart ? 'user' : 'off'}>
            <div className="userStyling">
              <img
                src={user.photo}
                alt="user" />
              <div
                className="text">
                <p>
                  <span>First name:</span> {user.first_name}
                </p>
                <p>
                  <span>Last Name:</span> {user.last_name}
                </p>
              </div>
            </div>

            <p
              onClick={this.startUserPreference}>
              updtate
                <i className="fa fa-upload" />
            </p>


          </div>
          <div
            className={this.state.inputForStart ? 'form' : 'off'}>
            <input
              value={this.state.firstname}
              type="text"
              name="firstname"
              placeholder="First name"
              onChange={this.handleChange} />
            <input
              value={this.state.lastname}
              type="text"
              name="lastname"
              placeholder="Last name"
              onChange={this.handleChange} />
            <input
              value={this.state.photo}
              type="text"
              name="photo"
              placeholder="Picture URL"
              onChange={this.handleChange} />

            <i
              onClick={this.updateUserPreference}
              className="fa fa-upload"/>

          </div>
        </div>
      })
    }
    return (
      <div
        className="user">
        <NavLink
          to="/bookr"
          className="navLink">
          <p>Home</p>
        </NavLink>
        <div
          className={!this.state.inputForStart ? 'startScreen' : 'off'}>
          <h1
            className="startH1">
            Click on the button to start filling out your user preferences
                                        </h1>
          <i
            onClick={this.startUserPreference}
            className="fa fa-play"></i>
        </div>
        <div
          className={this.state.inputForStart === false ? 'off' : 'form'}>
          <div className="inputs-btn">
            <div className="inputs">
              <input
                value={this.state.firstname}
                type="text"
                name="firstname"
                placeholder="First name"
                onChange={this.handleChange} />
              <input
                value={this.state.lastname}
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={this.handleChange} />
              <input
                value={this.state.photo}
                type="text"
                name="photo"
                placeholder="Picture URL"
                onChange={this.handleChange} />
            </div>

            <i
              onClick={this.safePreferences}
              className="fa fa-upload"></i>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
};

export default connect(mapStateToProps, { checkUserPreference, safeUserPreferences, updateUserPreference })(User);