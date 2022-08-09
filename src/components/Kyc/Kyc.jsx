import React from "react";
// import "./bodypart.css";
import "./kyc.css"

import { AiOutlineMenu } from 'react-icons/ai';
import { TbHome } from 'react-icons/tb';
import { Routes, Route, Link } from "react-router-dom";
export default function Abstract() {
    // const name = "Harsh"
    // console.log(name);
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
                                    <li>
                                        <Link to="/kyc"><a className='linknav'  >Kyc</a></Link>

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
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/* main content of abstract page  */}
                        <div className="abstract-pageinfo">
                            <div className="container register">
                                <div className="row">
                                    <div className="col-md-3 register-left">
                                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                        <h3>Welcome</h3>
                                        <p>Fill this form to complete your kyc in few minutes </p>

                                        <br />
                                    </div>
                                    <div className="col-md-9 register-right">
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                            >
                                                <h3 className="register-heading">Complete your KYC </h3>
                                                <div className="row register-form">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First Name *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last Name *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Confirm Password *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="maxl">
                                                                <label className="radio inline">
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        defaultValue="male"
                                                                        defaultChecked=""
                                                                    />
                                                                    <span> Male </span>
                                                                </label>
                                                                <label className="radio inline">
                                                                    <input type="radio" name="gender" defaultValue="female" />
                                                                    <span>Female </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Your Email *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                minLength={10}
                                                                maxLength={10}
                                                                name="txtEmpPhone"
                                                                className="form-control"
                                                                placeholder="Your Phone *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option className="hidden" selected="" disabled="">
                                                                    Please select your Sequrity Question
                                                                </option>
                                                                <option>What is your Birthdate?</option>
                                                                <option>What is Your old Phone Number</option>
                                                                <option>What is your Pet Name?</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                placeholder="Enter Your Answer *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            className="btnRegister"
                                                            defaultValue="Register"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade show"
                                                id="profile"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab"
                                            >
                                                <h3 className="register-heading">Apply as a Hirer</h3>
                                                <div className="row register-form">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First Name *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last Name *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Email *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                maxLength={10}
                                                                minLength={10}
                                                                className="form-control"
                                                                placeholder="Phone *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Confirm Password *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option className="hidden" selected="" disabled="">
                                                                    Please select your Sequrity Question
                                                                </option>
                                                                <option>What is your Birthdate?</option>
                                                                <option>What is Your old Phone Number</option>
                                                                <option>What is your Pet Name?</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="`Answer *"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            className="btnRegister"
                                                            defaultValue="Register"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
