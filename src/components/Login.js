import React from 'react'

import "./bodypart.css";
import {
  Routes,
  Route,
  Link,

} from "react-router-dom";

import { AiOutlineMenu } from 'react-icons/ai';
import { TbHome } from 'react-icons/tb'
export default function Login() {

  return (
    <div className="body">
      <div className="main">
        <section className="body-content">
          <aside className="sidebar">
            <div className="lang">
              <div className="lang-btn active">
                <TbHome className='homeiconn' />
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
                  <li><Link to="/mining"><a className='linknav'  >Mining</a></Link></li>

                  <li>
                    <Link to="/preview">
                      <a className="linknav">Withdrawals</a>
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
                  <li><Link to="/kyc"><a className='linknav'  >Kyc</a></Link></li>

                </ul>
              </nav>
              <div className="form-button">
                <Link className="login" to="/login">
                  Login
                </Link>
                <Link className="signup" to="/signup">
                  Signup
                </Link>
                <div class="dropdown">
                  <button class="dropbtn"><AiOutlineMenu style={{ width: 20, height: 20 }} /></button>
                  <div class="dropdown-content">
                    <Link to="/abstract"><a className='linknav'  >Abstract</a></Link>
                    <Link to="/mining"><a className='linknav'  >Mining</a></Link>
                    <Link to="/preview"><a className='linknav'  >Withdrawals</a></Link>
                    <Link to="/about"><a className='linknav'  >About</a></Link>
                    <Link to="/referal"><a className='linknav'  >Referal</a></Link>
                    <Link to="/bonus"><a className='linknav'  >Bonus</a></Link>
                    <Link to="/kyc"><a className='linknav'  >Kyc</a></Link>
                  </div>
                </div>
              </div>
            </header>
            {/* main content of login page  */}
            <div className="loginpage">
              <form method="post">
                <input type="hidden" name="_token" />
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
                    required
                  />
                </div>
                <div className="btn">
                  <button type="submit">
                    <span>
                      Login
                      <br />
                      account
                    </span>
                  </button>
                </div>
                <a href="#">Forgot Password ?</a>
              </form>
              <div className="title">
                <h1>
                  <span>Existing</span> User's
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
