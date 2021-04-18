import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './containers/login';
import RegisterComponent from './containers/register';
import BannerComponent from './components/banner';
import AuthProvider from './providers/auth';
import PrivateRoute from './privateRoute';
import NavigationBar from './containers/navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={NavigationBar}>
          </PrivateRoute>

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
