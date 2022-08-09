import React from "react";
import "./bodypart.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"
import { BiUserCircle } from 'react-icons/bi';

import { AiOutlineMenu } from 'react-icons/ai';
import { TbHome } from 'react-icons/tb';
export default function Signup() {
  const [full_name, setFull_name] = useState("");
  const [title, setTitle] = useState("")   //title is surname 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const [gender, setGender] = useState("");

  // async function GetData() {
  //   const resp = await axios
  //     .get(`https://61c59aa5c003e70017b797e7.mockapi.io/employee`)
  //     .then((resp) => {
  //       console.log(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // useEffect(() => {
  //   GetData();
  // });

  const handleReloading = (e) => {
    e.preventDefault();
    console.log("ok")
  }

  async function PostData() {
    const res = await axios.post('http://localhost:4000/api/v1/register', {
      full_name: full_name,
      title: title,
      username: username,
      email: email,
      phone: phone,
      password: password,

    }).then((res) => {
      console.log(res.data);
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }).catch((error) => {
      console.log(error)
      Swal.fire({
        icon: 'error',

        text: 'Details Missing / User Already exist',

      })
    })
  }


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
                  <li>
                                        <Link to="/userprofile"><a className='linknav'  ><BiUserCircle className="usercirclediv" /></a></Link>

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
                                        <Link to="/userprofile"><a className='linknav'  ><BiUserCircle className="usercirclediv" /></a></Link>

                  </div>
                </div>
              </div>
            </header>
            {/* main content of login page  */}
            <div className="loginpage">
              <form onSubmit={handleReloading}>
                <input type="hidden" name="_token" />
                <div className="field">
                  <label>Name</label>
                  <input
                    placeholder="Your name"
                    // id="login-email"
                    type="text"
                    name={full_name}
                    onChange={(e) => setFull_name(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label>Surname</label>
                  <input
                    placeholder="Your name"
                    // id="login-email"
                    type="text"
                    name={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label>Username</label>
                  <input
                    placeholder="Your Username"
                    // id="login-email"
                    type="text"
                    name={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <input
                    placeholder="Your email"
                    id="login-email"
                    type="email"
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    placeholder="Your password"
                    id="login-password"
                    type="password"
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input
                    placeholder="Your Phone number"
                    // id="login-password"
                    type="text"
                    name={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="info">
                  <p>Thank for creating a new account</p>
                </div>
                <div className="btn" onClick={() => PostData()}>
                  <button  >
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
