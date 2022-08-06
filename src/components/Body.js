import React from 'react'
import "./bodypart.css";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Button } from '@mui/material';
export default function Body() {
  
    return (
        <div className='body'>
            <div className='main'>
                <section className='body-content'>
                    <aside className='sidebar'>
                        <div className='lang'>
                            <div className='lang-btn '>
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
                            <Link to="/"> <a className='logo'>

                                <p>Tron  </p>
                                <span>.infinite</span>
                            </a></Link>
                            <nav className='navMenu' >
                                <ul>
                                    <li><Link to="/abstract"><a className='linknav'  >Abstract</a></Link></li>
                                    <li><Link to="/preview"><a className='linknav'  >Preview</a></Link></li>
                                    <li><Link to="/about"><a className='linknav'  >About</a></Link></li>
                                    <li><Link to="/referal"><a className='linknav'  >Referal</a></Link></li>
                                    <li><Link to="/bonus"><a className='linknav'  >Bonus</a></Link></li>
                                </ul>
                            </nav>
                            <div className='form-button'>
                                <Button className='login'>
                                    <Link className='login' to="/login">Login</Link>
                                </Button>

                                <Link className='signup' to="/signup">Signup</Link>
                                <span className="mobilMenu"><i></i></span>
                            </div>
                        </header>
                        <section className='home-firstBlock'>
                            <div className='content'>
                                <div className='text'>
                                    <h1><span>Smart Mining</span></h1>
                                    <p>This is best for  <b>Tron</b></p>
                                </div>
                                <div className='img'  >

                                </div>
                            </div>
                        </section>
                        <section className='home-bg'>
                            <div className='home-statisticBlock'>
                                <div className="statistic">
                                    <div className="item">
                                        <p>Minimum<br />investment package</p>
                                        <span>10$</span>
                                    </div>
                                    <div className="item">
                                        <p>Number<br />of investors</p>
                                        <span>53461</span>
                                    </div>
                                    <div className="item">
                                        <p>Number<br />of investments</p>
                                        <span>1745183$</span>
                                    </div>
                                </div>
                                <div className="title">
                                    <h2>Our advantages</h2>
                                </div>
                            </div>
                            <div className="home-advantages">
                                <div className="content">
                                    <div className="item icon01">
                                        <h3>Easy to get started</h3>
                                        <p>Start mining within a minute, fill out a simple registration form and get your personal account in SunMining</p>
                                    </div>
                                    <div className="item icon02">
                                        <h3>Ecological platform</h3>
                                        <p>We took care of safe and ecological mining thanks to solar panels</p>
                                    </div>
                                    <div className="item icon03">
                                        <h3>Automatic payment system</h3>
                                        <p>The income from your mining is accrued daily using an automatic payout system</p>
                                    </div>
                                    <div className="item icon04">
                                        <h3>Zero commission</h3>
                                        <p>All packages and withdrawals on SunMining platform are processed by default with a 0% fee</p>
                                    </div>
                                </div>

                            </div>
                            {/* middle part ------------------------------------------------------------- */}
                            <div className='hashpowerPage'>
                                <h1>Tron Price</h1>
                                <ul className="hashpower-duration">
                                    <li className="current">
                                        <a href="#section1">90 Days</a>
                                    </li>
                                    <li className="">
                                        <a href="#section2">180 Days</a>
                                    </li>
                                    <li className="">
                                        <a href="#section3">360 Days</a>
                                    </li>
                                </ul>
                                {/* elements ------------------------------------------------------------ */}
                                <div className='hashpower-tabs' id="section1">
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <h3>Item</h3>
                                            </div>
                                            <div className='info'>
                                                <h3><span>1000 GB/s</span></h3>
                                                <p>Description abcd</p>
                                                <p>Profit is $100</p>
                                            </div>
                                            <div className='price'>
                                                <span>$100</span>
                                            </div>
                                            <a href="">Buy</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Reviews pages left to import ---------------- */}

                            {/* how it works page here  */}
                            <div className="home-work">
                                <div className="content">
                                    <div className="title">
                                        <h2>How it works?</h2>
                                    </div>
                                    <div className="item">
                                        <h3>Register your account</h3>
                                        <p>To register, fill out a simple form. With the help of a personal account you can purchase profitable packages, withdraw funds and use the referral program.</p>
                                    </div>
                                    <div className="item">
                                        <h3>Choose the right package</h3>
                                        <p>The availability and variety of packages provides our users with the opportunity to choose and invest with ease.</p>
                                    </div>
                                    <div className="item">
                                        <h3>Get your profit every day</h3>
                                        <p>With SunMining platform, you will receive periodic payments to the wallet you specified. Cryptomining provides an opportunity for regular and promising profits.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

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
