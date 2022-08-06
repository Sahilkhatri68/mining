import React from 'react'
import "./bodypart.css";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
export default function Bonus() {
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
                                <h1>Bonus Plans </h1>
                                <p>Cryptocurrency cloud mining has been developed as a way to mine crypto by using
                                    rented cloud computing power without having to deal with the technical know-how
                                 </p>
                                <p>3% daily on the profit made by direct down-line</p><br />
                                <p>1.Attain 1000$ team sales and qualify to earn 3.5% of 1000 monthly</p> 
                                <p>2.Attain 2000$ team sales and qualify to earn 4% of 2000$ monthly</p>
                                <p>3.Attain 5000$ team sales and qualify to earn 4.5% of 5000$ monthly</p>
                                <p>4.Attain 10000$ team sales and qualify to earn 5% of 10000$ monthly</p>
                                <p>5.Attain 20000$ team sales and qualify to earn 5.5% of 20000$ monthly/A Dubai Trip</p>
                                <p>6.Attain 50000$ team sales and qualify to earn 6% of 50000$ monthly/ A share
                                    holders Trip</p>

                            </div>
                            <div className="img">
                                <img src="https://monophy.com/media/aq2afaQYOOQoaF7rsd/monophy.gif" alt="About" />
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

