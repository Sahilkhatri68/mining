import React from "react";
import "../bodypart.css";
import "./userprofile.css"
import { BiUserCircle } from 'react-icons/bi';

import { Routes, Route, Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { TbHome } from 'react-icons/tb';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function EditUser() {
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
                        {/* main content of abstract page  */}
                        <div className="abstract-pageinfo">
                            <Card sx={{ Width: 300 }} className="outermaincardd">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User
                                    </Typography>
                                    <div className="uInfo">
                                        <div className="UserData">
                                            Email : User@gmail.com
                                        </div>
                                        <div className="UserData">
                                            Phone : XXXXXXXXXXX
                                        </div>
                                    </div>
                                </CardContent>
                                <CardActions className="btncardx">
                                    {/* <button className="eBtn">Edit</button> */}

                                </CardActions>
                            </Card>
                            <div className="info">
                                <div>
                                    <div className="contact-form-wrapper d-flex justify-content-center">
                                        <form action="#" className="contact-form">
                                            <h5 className="title">Edit Profile</h5>
                                            <p className="description">
                                                you can edit your profile easily by filling this form. You can do it any time
                                            </p>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-control rounded border-white mb-3 form-input"
                                                    id="name"
                                                    placeholder="Name"
                                                    required=""
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    className="form-control rounded border-white mb-3 form-input"
                                                    placeholder="Email"
                                                    required=""
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="passowrd"
                                                    className="form-control rounded border-white mb-3 form-input"
                                                    placeholder="password"
                                                    required=""
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="passowrd"
                                                    className="form-control rounded border-white mb-3 form-input"
                                                    placeholder="Confirm password"
                                                    required=""
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="file"
                                                    className="form-control rounded border-white mb-3 form-input"
                                                    placeholder="image"
                                                    required=""
                                                />
                                            </div>

                                            <div className="submit-button-wrapper">
                                                <input type="submit" className="eBtn" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <footer>
                <div className="info">
                    <p>Copyright ?? 2022 TronMining</p>
                </div>
                <div className="link">
                    <Link to="/policy"> Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditioin</Link>
                </div>
            </footer>
        </div>
    );
}
