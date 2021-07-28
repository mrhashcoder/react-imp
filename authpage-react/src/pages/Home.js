import React, { Component } from "react";
import { NavLink } from "react-router-dom";



function Home() {

    return (
        <div className="Home">
            <div className="appAside"> 
                <h1>Login Auth</h1>
            </div>
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

            </div>
        </div>
    );
}

export default Home;
