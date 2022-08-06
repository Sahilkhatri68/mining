import React from 'react'
import "./bodypart.css";
import bonusIMG from "./../images/bonus.PNG";

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
export default function Privacypolicy() {
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
                        <div className="static-page">
                            <h1>Privacy Policy</h1>
                            <p>In the Privacy Policy, SunMining collects, uses, shares and protects user information received through the website SunMining.energy.</p>
                            <p>Any personal information that we collect from users (you, your or customer) or that you provide to us will be processed by us.</p>
                            <p>By "personal information" we mean any data that, either separately or in combination with other information, allows us to directly or indirectly identify, for example, your name, email address, IP address, device identifier or other online identifier.</p>
                            <p>SunMining, uses the information collected about you solely to fulfill its contractual obligations and improve customer service.
                                <br />In turn, SunMining are committed to making every effort to protect your privacy.
                            </p>
                         
                           
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
