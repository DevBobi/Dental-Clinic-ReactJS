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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/serviceDetail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
