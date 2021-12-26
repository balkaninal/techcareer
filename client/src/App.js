import HomeScreen from './Screens/HomeScreen'
import ErrorScreen from './Screens/ErrorScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import LandingScreen from './Screens/LandingScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen'
import UserScreen from './Screens/UserScreen'
import Footer from './Components/Footer'
function App() {

  return (

    <Router>


      <main >


        <Routes>
        <Route path="/*" element={<ErrorScreen />} />
        <Route path="/user" element={<UserScreen />} />
        <Route path="/login"  exact element={<LoginScreen />} />
        <Route path="/register"  exact element={<RegisterScreen />} />
          <Route path="/"  exact element={<HomeScreen />} />
          
        </Routes>


       
      </main>
      


    </Router>


  );
}

export default App;
