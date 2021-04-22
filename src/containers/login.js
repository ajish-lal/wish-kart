import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormComponent from "../components/Form";
import { useAuth } from "../providers/auth";
import { useLoader } from "../providers/loader";

const formFieldsData = [
    {
        name: "Email",
        type: "email",
        value: "",
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

function LoginComponent() {
    const [formFields, setFormFields] = useState(formFieldsData);
    const [disableButton, setDisableButton] = useState(false);
    const { currentUser, login } = useAuth();
    const { showLoader } = useLoader();
    let history = useHistory();

    const getFormValues = async (values) => {
        setFormFields(values);
        setDisableButton(true);
        try {
            showLoader(true);
            await login(values[0].value, values[1].value);
            history.push('/');
        } catch (err) {
            setDisableButton(false);
            alert(err.message);
        } finally {
            showLoader(false);
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