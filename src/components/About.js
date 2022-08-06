import React from 'react'
import "./bodypart.css";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
export default function About() {
    return (
        <div className='body'>
            <div className='main'>
                <section className='body-content'>
                    <aside className='sidebar'>
                        <div className='lang'>
                            <div className='lang-btn active'>
                                <span></span>
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
                                    <li><Link to="/preview"><a className='linknav'  >Preview</a></Link></li>
                                    <li><Link to="/about"><a className='linknav'  >About</a></Link></li>
                                    <li><Link to="/referal"><a className='linknav'  >Referal</a></Link></li>
                                    <li><Link to="/bonus"><a className='linknav'  >Bonus</a></Link></li>
                                </ul>
                            </nav>
                            <div className='form-button'>
                                <Link className='login' to="/login">Login</Link>
                                <Link className='signup' to="/signup">Signup</Link>
                                <span className="mobilMenu"><i></i></span>
                            </div>
                        </header>
                        {/* main content of abstract page  */}
                        <div className="abstract-pageinfo">
                            <div className="info">
                                <h1>About</h1>
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
                                    service. Whether it’s quantitative trading or DeFi technology, Tron Infinite makes
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
                <div className="info"><p>Copyright © 2022 TronMining</p></div>
                <div className="link">
                <Link to="/policy"> Privacy Policy</Link>
                  <Link to="/terms">Terms & Conditioin</Link>
                </div>
            </footer>
        </div >
    )
}

