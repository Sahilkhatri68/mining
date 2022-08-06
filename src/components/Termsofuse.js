import React from 'react'
import "./bodypart.css";
import bonusIMG from "./../images/bonus.PNG";

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
export default function Termsandcondition() {
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
                        <header  >
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
                            <h1> Terms & Conditioin's</h1>
                            <p>In the Privacy Policy, SunMining collects, uses, shares and protects user information received through the website SunMining.energy.</p>
                            <p>Any personal information that we collect from users (you, your or customer) or that you provide to us will be processed by us.</p>
                            <p>By "personal information" we mean any data that, either separately or in combination with other information, allows us to directly or indirectly identify, for example, your name, email address, IP address, device identifier or other online identifier.</p>
                            <p>SunMining, uses the information collected about you solely to fulfill its contractual obligations and improve customer service.
                                <br />In turn, SunMining are committed to making every effort to protect your privacy.
                            </p>
                            <p>The Privacy Policy together with the Terms of Use and other documents to which it refers defines the principles and rules on the basis of which we collect, process and use your personal data.</p>
                            <p>Please read this document carefully in order to understand our position and policies regarding your personal data and how we will use it. If you do not want your personal information to be collected, you need to stop working on this site.</p>
                            <h2>1. User Information</h2>
                            <p>Information that you provide to us during registration.</p>
                            <p>When you create an account, at SunMining, you provide us personal information that includes your contact information (email address and password).</p>
                            <p>Each time you visit our site and use our services, we can automatically collect the following information, which may be considered personal information in combination with other information about you:</p>


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
