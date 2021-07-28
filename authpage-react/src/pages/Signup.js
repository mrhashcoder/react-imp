import React from 'react'
import { NavLink } from "react-router-dom";


function Signup() {
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
                {/* Signup Form IS HERE */}
                <div className="formCenter">
                    <form className="formFields">
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="name">
                        Full Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="name"
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
                        <label className="formFieldCheckboxLabel">
                        <input
                            className="formFieldCheckbox"
                            type="checkbox"
                            name="hasAgreed"
                        />{" "}
                            I agree all statements in{" "}
                        <a href="null" className="formFieldTermsLink">
                            terms of service
                        </a>
                        </label>
                    </div>

                    <div className="formField">
                        <button className="formFieldButton">Sign Up</button>{" "}
                        <NavLink to="/login" className="formFieldLink">
                            I'm already member
                        </NavLink>
                    </div>
                    </form>
                </div> 

            </div>
        </div>
    );
}

export default Signup
