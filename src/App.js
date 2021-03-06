import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './containers/Login';
import RegisterComponent from './containers/Register';
import BannerComponent from './components/Banner';
import AuthProvider from './providers/auth';
import PrivateRoute from './PrivateRoute';
import NavigationBar from './containers/Navbar';
import LoaderComponent from './components/Loader';
import LoaderProvider from './providers/loader';

function App() {
  return (
    <LoaderProvider>
      <LoaderComponent></LoaderComponent>
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
    </LoaderProvider>
  );
}

export default App;
