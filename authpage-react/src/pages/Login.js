import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Login extends Component {  

  render() {
    return (
        <div className="Home">
        <div className="appAside" />
        <div className="appForm">
          	<div className="pageSwitcher">
				<NavLink
					to="login"
					activeClassName="pageSwitcherItem-active"
					className="pageSwitcherItem"
				>
				Login
				</NavLink>
				
				<NavLink
					to="signup"
					activeClassName="pageSwitcherItem-active"
					className="pageSwitcherItem"
					>
					Sign Up
            	</NavLink>
          	</div>

          	<div className="formTitle">
				<NavLink
					to="login"
					activeClassName="formTitleLink-active"
					className="formTitleLink"
				>
				Login
				</NavLink>
				
				<NavLink
					exact
					to="signup"
					activeClassName="formTitleLink-active"
					className="formTitleLink"
				>
				Sign Up
				</NavLink>
          	</div>
            {/* Login Form IS HERE */}
			<div className="formCenter">
				<form className="formFields">
				<div className="formField">
					<label className="formFieldLabel" htmlFor="email">
					E-Mail Address
					</label>
					<input
					type="email"
					id="email"
					className="formFieldInput"
					placeholder="Enter your email"
					name="email"
					/>
				</div>

				<div className="formField">
					<label className="formFieldLabel" htmlFor="password">
					Password
					</label>
					<input
					type="password"
					id="password"
					className="formFieldInput"
					placeholder="Enter your password"
					name="password"
					/>
				</div>

				<div className="formField">
					<button className="formFieldButton">Login</button>{" "}
					
					<NavLink to="/signup" className="formFieldLink">
					Create an account
					</NavLink>
				</div>

				</form>
			</div>			  
        </div>
    </div>
    );
  }
}

export default Login;
