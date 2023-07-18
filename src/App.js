import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-In";
import SignUp from "./pages/Sign-Up.jsx";
import ForgotPassword from "./pages/Forgot-Password";
import Offers from "./pages/Offers";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sign-In" element={<SignIn/>}/>
          <Route path="/Sign-Up" element={<SignUp/>}/>
          <Route path="/Forgot-Password" element={<ForgotPassword/>}/>
          <Route path="/Offers" element={<Offers/>}/>

          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
