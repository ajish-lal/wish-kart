import { useAuth } from "./providers/auth";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route {...rest} render={(props) => (
            currentUser ?
                <Component {...props}></Component>
                :
                <Redirect to="/login"></Redirect>
        )} />
    );
}

export default PrivateRoute;