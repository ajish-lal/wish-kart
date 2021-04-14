import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './containers/login';
import RegisterComponent from './containers/register';
import BannerComponent from './components/banner';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <BannerComponent>
            <LoginComponent></LoginComponent>
          </BannerComponent>
        </Route>

        <Route path='/register'>
          <BannerComponent>
            <RegisterComponent></RegisterComponent>
          </BannerComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
