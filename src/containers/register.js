import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormComponent from "../components/Form";
import { useAuth } from "../providers/auth";
import { useLoader } from "../providers/loader";

const formFieldsData = [
    {
        name: "Username",
        type: "text",
        value: "",
        hasError: false,
    },
    {
        name: "Email",
        type: "email",
        hasError: false,
        required: true
    },
    {
        name: "Password",
        type: "password",
        hasError: false,
        required: true
    },
    {
        name: "Confirm Password",
        type: "password",
        hasError: false,
        required: true,
        errorMsg: 'Passwords do not match!'
    }
]


const RegisterComponent = props => {
    const [formFields, setFormFields] = useState(formFieldsData);
    const [disableButton, setDisableButton] = useState(false);
    const { register } = useAuth();
    const { showLoader } = useLoader();
    let history = useHistory();

    const getFormValues = async (values) => {
        // Password matching
        if (values[2].value !== values[3].value) {
            values[3].hasError = true;
            setFormFields(values);
        } else {
            values[3].hasError = false;
            setFormFields(values);
            setDisableButton(true);
            try {
                showLoader(true);
                await register(values[1].value, values[2].value);
                history.push('/login');
            } catch (err) {
                alert(err.message);
                setDisableButton(false);
            } finally {
                showLoader(false);
            }
        }
    }

    return (
        <FormComponent title={'Register'} fields={formFields} buttonLabel="Register" disableButton={disableButton}
            sendForm={getFormValues}>
            <div className="login-register-link">
                <Link to="/login">Existing User? Login here</Link>
            </div>
        </FormComponent>
    );
}

export default RegisterComponent;