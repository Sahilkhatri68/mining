import React from 'react'
import "./bodypart.css";
import bonusIMG from "./../images/bonus.PNG";

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
export default function Abstract() {
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
                <img src={bonusIMG} alt="tron icon" />
              </div>
              <div className='info'>
                <h1>Referal  Plans </h1>
                <p>TRON INFINITE features an affiliate program for users that will reward them with
                  extra rewards. You can invite users by sending your own invitation code by
                  clicking the “Share” button on the platform and copy-pasting the link and sharing it
                  via social media.</p>

                <p> If users invite friends who deposit funds to their accounts they will receive rebates.
                  Below is the complete breakdown of the various levels and rebates users can
                  accumulate:</p>
                <br />
                <h3>Direct Referral: </h3><br />
                <p>TRON INFINITE Links:<h2>https://trxnfinite.com</h2></p>
                <p>3% daily on the profit made by direct down-line</p><br />
                <p>1.Attain 1000$ team sales and qualify to earn 3.5% of 1000 monthly</p><br />
                <p>2.Attain 2000$ team sales and qualify to earn 4% of 2000$ monthly</p><br />
                <p>3.Attain 5000$ team sales and qualify to earn 4.5% of 5000$ monthly</p><br />
                <p>4.Attain 10000$ team sales and qualify to earn 5% of 10000$ monthly</p><br />
                <p>5.Attain 20000$ team sales and qualify to earn 5.5% of 20000$ monthly/A Dubai Trip</p><br />
                <p>6.Attain 50000$ team sales and qualify to earn 6% of 50000$ monthly/ A share
                  holders Trip</p><br />
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
