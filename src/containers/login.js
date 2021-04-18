import { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormComponent from "../components/Form";
import authApp from "../firebase";
import { AuthContext } from '../providers/auth'

const formFieldsData = [
    {
        name: "Email",
        type: "email",
        value: "ajish@gmail.com",
        hasError: false,
        required: true
    },
    {
        name: "Password",
        type: "password",
        hasError: false,
        required: true
    }
]

const LoginComponent = props => {
    const [formFields, setFormFields] = useState(formFieldsData);
    const [disableButton, setDisableButton] = useState(false);
    let history = useHistory();
    const currentUser = useContext(AuthContext);

    const getFormValues = async (values) => {
        setFormFields(values);
        setDisableButton(true);
        try {
            await authApp.auth().signInWithEmailAndPassword(values[0].value, values[1].value);
            history.push('/');
        } catch (err) {
            setDisableButton(false);
            alert(err.message);
        }
    }

    if (currentUser) {
        return <Redirect to='/'></Redirect>
    }

    return (
        <FormComponent title={'Login'} fields={formFields} buttonLabel="Login" disableButton={disableButton}
            sendForm={getFormValues}>
            <div className="login-register-link">
                <Link to="/register">New to Wishkart? Create an account</Link>
            </div>
        </FormComponent>
    );
}

export default LoginComponent;