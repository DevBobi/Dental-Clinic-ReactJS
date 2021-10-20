import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Home from './Components/Homes/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetail from './Components/Homes/ServiceDetail/ServiceDetail';
import Footer from './Components/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Register/PrivateRoute/PrivateRoute';
import Signup from './Components/Register/SignUp/SignUp';
import SignIn from './Components/Register/SignIn/SignIn';
import AboutUs from './Components/Homes/AboutUs/AboutUs';
import DoctorDetail from './Components/Homes/DoctorDetail/DoctorDetail';
import Services from './Components/Homes/Services/Services';
import Appoinment from './Components/Homes/Appoinment/Appoinment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services ></Services>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/appoinment">
              <Appoinment></Appoinment>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/serviceDetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/doctorDetail/:doctorId">
              <DoctorDetail></DoctorDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
