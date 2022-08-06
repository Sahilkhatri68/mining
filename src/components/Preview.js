import React from 'react'
import "./bodypart.css";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
export default function Preview() {
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
                                <h1>Preview</h1>
                                <p>Cryptocurrency cloud mining has been developed as a way to mine crypto by using
                                    rented cloud computing power without having to deal with the technical know-how
                                    of installing or running any hardware directly yourself. People can easily
                                    participate in crypto mining by opening an account on a cloud mining service and
                                    renting hash power for a minimal cost. As such, cloud mining companies have
                                    made mining much more accessible and profitable for a wide group of people. </p>
                                <p>Mining can be a tedious process that can be time-consuming and expensive for an
                                    individual. Cloud mining services like TRON INFINITE make it easy for users to
                                    break into the industry without having to deal with all the technical issues that
                                    come with setting up their own mining farm. Cloud mining companies provide a
                                    dashboard that makes the mining process extremely easy, with a few clicks. </p>

                            </div>
                            <div className="img">
                                <img src="https://imgsrv.igms.io/smartcrop?width=500&height=250&url=https://guiadobitcoin.com.br/wp-content/uploads/2020/09/02-tron.jpg" alt="About" />
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

