import React from "react";
import "./bodypart.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");

  async function GetData() {
    const resp = await axios
      .get(`https://61c59aa5c003e70017b797e7.mockapi.io/employee`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    GetData();
  });

  return (
    <div className="body">
      <div className="main">
        <section className="body-content">
          <aside className="sidebar">
            <div className="lang">
              <div className="lang-btn active">
                <span></span>
              </div>
              <div className="item lang-item">
                <a href="" className="en"></a>
                <a href="" className="ru"></a>
                <a href="" className="de"></a>
                <a href="" className="fr"></a>
              </div>
            </div>
            <div className="social">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </aside>
          <section className="maincontent">
            <header
              style={
                {
                  // padding: 30,
                  // display: "flex",
                  // justifyContent: "space-between",
                  // alignItems: "center",
                  // width: 132,
                }
              }
            >
              <Link to="/">
                {" "}
                <a className="logo">
                  <p>Tron </p>
                  <span>.infinite</span>
                </a>
              </Link>
              <nav className="navMenu">
                <ul>
                  <li>
                    <Link to="/abstract">
                      <a className="linknav">Abstract</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/preview">
                      <a className="linknav">Preview</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <a className="linknav">About</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/referal">
                      <a className="linknav">Referal</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/bonus">
                      <a className="linknav">Bonus</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="form-button">
                <Link className="login" to="/login">
                  Login
                </Link>
                <Link className="signup" to="/signup">
                  Signup
                </Link>
                <span className="mobilMenu">
                  <i></i>
                </span>
              </div>
            </header>
            {/* main content of login page  */}
            <div className="loginpage">
              <form method="post">
                <input type="hidden" name="_token" />
                <div className="field">
                  <label>Name</label>
                  <input
                    placeholder="Your name"
                    // id="login-email"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="field">
                  <label>Surname</label>
                  <input
                    placeholder="Your name"
                    // id="login-email"
                    type="text"
                    name="surname"
                    required
                  />
                </div>
                <div className="field">
                  <label>Username</label>
                  <input
                    placeholder="Your Username"
                    // id="login-email"
                    type="text"
                    name="Username"
                    required
                  />
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <input
                    placeholder="Your email"
                    id="login-email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    placeholder="Your password"
                    id="login-password"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input
                    placeholder="Your Phone number"
                    // id="login-password"
                    type="text"
                    name="Phone"
                  />
                </div>
                <div className="info">
                  <p>Thank for creating a new account</p>
                </div>
                <div className="btn">
                  <button type="submit">
                    <span>
                      Create <br />
                      New account
                    </span>
                  </button>
                </div>
              </form>
              <div className="title">
                <h1>
                  <span>New</span> Commer's
                </h1>
              </div>
            </div>
          </section>
        </section>
      </div>
      <footer>
        <div className="info">
          <p>Copyright © 2022 TronMining</p>
        </div>
        <div className="link">
          <Link to="/policy"> Privacy Policy</Link>
          <Link to="/terms">Terms & Conditioin</Link>
        </div>
      </footer>
    </div>
  );
}
