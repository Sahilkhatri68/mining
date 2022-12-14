import React from 'react'
import "./bodypart.css";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';

import { AiOutlineMenu } from 'react-icons/ai';
import { TbHome } from 'react-icons/tb';
export default function About() {
    return (
        <div className='body'>
            <div className='main'>
                <section className='body-content'>
                    <aside className='sidebar'>
                        <div className='lang'>
                            <div className='lang-btn active'>
                                <TbHome className='homeiconn' />
                            </div>
                            <div className='item lang-item'>
                                <a href="" className="en"></a>
                                <a href="" className="ru"></a>
                                <a href="" className="de"></a>
                                <a href="" className="fr"></a>
                            </div>
                        </div>
                        <div className='social'>
                            <a href="#" ></a>
                            <a href="#" ></a>
                            <a href="#" ></a>
                            <a href="#" ></a>
                        </div>
                    </aside>
                    <section className='maincontent'>
                        <header style={{
                            // padding: 30,
                            // display: "flex",
                            // justifyContent: "space-between",
                            // alignItems: "center",
                            // width: 132,
                        }}>
                            <Link to="/">  <a className='logo'>

                                <p>Tron  </p>
                                <span>.infinite</span>
                            </a></Link>
                            <nav className='navMenu'>
                                <ul>
                                    <li><Link to="/abstract"><a className='linknav'  >Abstract</a></Link></li>
                                    <li><Link to="/mining"><a className='linknav'  >Mining</a></Link></li>

                                    <li><Link to="/preview"><a className='linknav'  >Withdrawals</a></Link></li>
                                    <li><Link to="/about"><a className='linknav'  >About</a></Link></li>
                                    <li><Link to="/referal"><a className='linknav'  >Referal</a></Link></li>
                                    <li><Link to="/bonus"><a className='linknav'  >Bonus</a></Link></li>
                                    <li><Link to="/kyc"><a className='linknav'  >Kyc</a></Link></li>
                                    <li>
                                        <Link to="/userprofile"><a className='linknav'  ><BiUserCircle className="usercirclediv" /></a></Link>

                                    </li>

                                </ul>
                            </nav>
                            <div className='form-button'>
                                <Link className='login' to="/login">Login</Link>
                                <Link className='signup' to="/signup">Signup</Link>
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
                            <div className="info">
                                <h1>About</h1>
                                <p>
                                    Mining stops automatically after a user earns 300%
                                    Every registration package becomes points that qualifies for
                                    a Dubai Trip of $20k and $60k respectively
                                    All earnings of investors come from both referral
                                    bonus,monthly earnings and daily ROI make up the total of
                                    300% for all the investors                                </p>

                                <p>Tron Infinite was micro-launched on local host in 2018 and is one of the leading
                                    TRX cloud mining service providers. The purpose of this company is to maximize
                                    the interests of each user, so they can leverage large wealth with relatively low
                                    capital. Through future data analysis, users should understand that Tron Infinite
                                    pursues long-term strategic cooperative relationships with users, It provides users

                                    ....Tron Infinite

                                    3 www.trxinfinite.com
                                    with a safe, convenient, and efficient TRX cloud mining experience. Users can
                                    visit the official Tron Infinite website and register for an account with ease
                                    www.trxinfinite.com/register </p>
                                <p>The company enables users to mine the TRX cryptocurrency with a low-cost cloud
                                    service. Whether it???s quantitative trading or DeFi technology, Tron Infinite makes
                                    it easy to participate in the blockchain revolution with its cloud mining services.
                                    To start cloud mining with Tron Infinite, users can visit their website, register with
                                    an email, deposit TRX and the service will automatically start mining the TRX
                                    cryptocurrency for you.</p>

                            </div>
                            <div className="img">
                                <img src="https://c4.wallpaperflare.com/wallpaper/155/759/599/tron-cryptocurrency-trx-logo-wallpaper-preview.jpg" alt="About" />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <footer>
                <div className="info"><p>Copyright ?? 2022 TronMining</p></div>
                <div className="link">
                    <Link to="/policy"> Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditioin</Link>
                </div>
            </footer>
        </div >
    )
}

