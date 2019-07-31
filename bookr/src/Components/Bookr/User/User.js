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
			// age: '',
			// adress: '',
			photo: '',
			// mobilephonenumber: '',
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
			// this.state.age &&
			// this.state.adress &&
      this.state.photo 
      //&& this.state.mobilephonenumber
      ) {

			const user = {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				// age: this.state.age,
				// adress: this.state.adress,
				photo: this.state.photo,
				// mobilephonenumber: this.state.mobilephonenumber,
			};

			// this.sendUserData(user);
      this.props.safeUserPreferences(this.state.firstname,this.state.lastname,this.state.photo);

			this.setState({
				firstname: '',
				lastname: '',
				// age: '',
				// adress: '',
				photo: '',
				// mobilephonenumber: '',
				inputForStart: false,
			});
		}
	};

	updateUserPreference = () => {
   this.props.updateUserPreference(this.state.firstname,this.state.lastname,this.state.photo);

   this.setState({
    firstname: '',
    lastname: '',
    // age: '',
    // adress: '',
    photo: '',
    // mobilephonenumber: '',
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
									<span>First name:</span> {user.firstname}
								</p>
								<p>
									<span>Last Name:</span> {user.lastname}
								</p>
								{/* <p>
									<span>Age:</span> {user.age}</p> */}
								{/* <p>
									<span>Adress:</span> {user.adress}
								</p> */}
								{/* <p>
									<span>Mobilephone:</span> {user.mobilephonenumber}
								</p> */}
							</div>
						</div>
						<button
							className="form change"
							onClick={this.startUserPreference}>
							<i className="fa fa-upload" /> update
                                                        </button>
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
						{/* <input
							value={this.state.age}
							type="number"
							min="18"
							max="100"
							name="age"
							placeholder="Age"
							onChange={this.handleChange} />
						<input
							value={this.state.adress}
							type="text"
							name="adress"
							placeholder="Adress"
							onChange={this.handleChange} /> */}
						<input
							value={this.state.photo}
							type="text"
							name="photo"
							placeholder="Picture URL"
							onChange={this.handleChange} />
						{/* <input
							value={this.state.mobilephonenumber}
							type="text"
							name="mobilephonenumber"
							placeholder="Mobilephone"
							onChange={this.handleChange} /> */}
						<button
							onClick={this.updateUserPreference}>
							<i className="fa fa-upload"></i>
						</button>
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
					{/* <input
						value={this.state.age}
						type="number"
						min="18"
						max="100"
						name="age"
						placeholder="Age"
						onChange={this.handleChange} />
					<input
						value={this.state.adress}
						type="text"
						name="adress"
						placeholder="Adress"
						onChange={this.handleChange} /> */}
					<input
						value={this.state.photo}
						type="text"
						name="photo"
						placeholder="Picture URL"
						onChange={this.handleChange} />
					{/* <input
						value={this.state.mobilephonenumber}
						type="text"
						name="mobilephonenumber"
						placeholder="Mobilephone"
						onChange={this.handleChange} /> */}
					<button
						onClick={this.safePreferences}>
						<i className="fa fa-upload"></i>
					</button>
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