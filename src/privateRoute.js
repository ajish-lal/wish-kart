import { useContext } from "react";
import { AuthContext } from "./providers/auth";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const currentUser = useContext(AuthContext);

    console.log(currentUser);

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