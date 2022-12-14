import './App.css';
import Body from './components/Body';
import Login from './components/Login';
import Signup from './components/Signup';
import Abstract from './components/Abstract';
import Preview from './components/Preview';
import About from './components/About';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Referal from './components/Referal';
import Bonus from './components/Bonus';
import Privacypolicy from './components/Privacypolicy';
import Termsandcondition from './components/Termsofuse';
import Mining from './components/Mining';
import Kyc from './components/Kyc/Kyc';
import Userprofile from './components/Profile/Userprofile';
import EditUser from './components/Profile/EditUser';
function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" exact element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/about" element={<About />} />
        <Route path="/referal" element={<Referal />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/policy" element={<Privacypolicy />} />
        <Route path="/terms" element={<Termsandcondition />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/edituser" element={<EditUser />} />
      </Routes>

    </div>
  );
}

export default App;
