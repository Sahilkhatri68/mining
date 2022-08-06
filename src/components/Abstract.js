import React from 'react'
import "./bodypart.css";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
export default function Abstract() {
    const name = "Harsh"
    console.log(name);
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
                        <div className='abstract-pageinfo'>
                            <div className='img'>
                                <img src="https://media1.giphy.com/media/Izv8k2DxBhWkYHZE5z/giphy.gif?cid=790b76112a9823d0ad138f7c5d0c86b105701e3c79698e34&rid=giphy.gif&ct=g" alt="tron icon" />
                            </div>
                            <div className='info'>
                                <h1>Abstract</h1>
                                <p>The Tron infinite project is design as a burn strategy to help the Tron community
                                    burn the numerous supply of Tron on its Blockchain, everyone who has access
                                    Tron coin globally will be privilege to experience a rapid Tron growth as a result
                                    of this mining farm establishment across Asian, India and other part of the world.
                                    Pays miners upto 5% daily on mining hashpower these funds are invested directly
                                    into the acquisition of new mining hard wares and alternative power supply to the
                                    mining farm, thereby ensuring that the Tron Blockchain moves from POS to
                                    altimate POW as rewards are claimed on daily basis. The Tron infinite farm has
                                    paid out millions of dollars since it's creations and it's growing rapidly around the
                                    world to ensure that more countries and continents have access to the hardware
                                    mining systems...</p>
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
