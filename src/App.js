import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './containers/login';
import RegisterComponent from './containers/register';
import BannerComponent from './components/banner';
import AuthProvider from './providers/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <BannerComponent>
              Hello
            </BannerComponent>
          </Route>

          <Route exact path='/login'>
            <BannerComponent>
              <LoginComponent></LoginComponent>
            </BannerComponent>
          </Route>

          <Route exact path='/register'>
            <BannerComponent>
              <RegisterComponent></RegisterComponent>
            </BannerComponent>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
