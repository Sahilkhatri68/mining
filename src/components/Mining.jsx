import React from "react";
import "./bodypart.css";
import "./mining.css"
import { Routes, Route, Link } from "react-router-dom";
export default function Mining() {
    // const name = "Harsh"
    // console.log(name);
    return (
        <div className="body">
            <div className="main">
                <section className="body-content">
                    <aside className="sidebar">
                        <div className="lang">
                            <div className="lang-btn active">
                                <span></span>
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
                                </ul>
                            </nav>
                            <div className="form-button">
                                <Link className="login" to="/login">
                                    Login
                                </Link>
                                <Link className="signup" to="/signup">
                                    Signup
                                </Link>
                                <span className="mobilMenu">
                                    <i></i>
                                </span>
                            </div>
                        </header>
                        {/* main content of abstract page  */}
                        <div className="abstract-pageinfo">
                            <div className="leftattain">
                                <table>
                                    <caption>5% daily mines of Tron to be claimed on the dashboard by
                                        every user.
                                        But only three generations
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">generation</th>
                                            <th scope="col">Bonus</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="generation">Gen -1 </td>
                                            <td data-label="Bonus">10%</td>

                                        </tr>
                                        <tr>
                                            <td scope="row" data-label="generation">
                                                Gen -2
                                            </td>
                                            <td data-label="Bonus">5%</td>

                                        </tr>
                                        <tr>
                                            <td scope="row" data-label="generation">
                                                Gen -3
                                            </td>
                                            <td data-label="Bonus">3%</td>

                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                            <div className="emtyspace">

                            </div>
                            <div className="rightattain">
                                <p   className="paraattain" style={{marginBottom:20,fontSize:20}}>1.Attain $1000 team sales and qualify to earn 3.20% of $1000
                                    monthly
                                </p>
                                <p  className="paraattain"  style={{marginBottom:20,fontSize:20}}>2.Attain $2000 team sales and qualify to earn 4% of $2000
                                    monthly
                                </p>
                                <p  className="paraattain"  style={{marginBottom:20,fontSize:20}}>3.Attain $5000 team sales and qualify to earn 4.5% of $5000
                                    monthly
                                </p>
                                <p  className="paraattain"  style={{marginBottom:20,fontSize:20}}>4.Attain $10000 team sales and qualify to earn 5% of $10000
                                    monthly
                                </p>
                                <p  className="paraattain"  style={{marginBottom:20,fontSize:20}}>5.Attain $20000 team sales and qualify for a Dubai trip =$2000
                                </p>
                                <p   className="paraattain" style={{marginBottom:20,fontSize:20}}>5.Attain $50000 team sales and qualify become a share holder
                                </p>
                               
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