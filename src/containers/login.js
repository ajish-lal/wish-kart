import { useState } from "react";
import FormComponent from "../components/form";
import authApp from "../firebase";

const formFieldsData = [
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
    }
]

const LoginComponent = props => {
    const [formFields, setFormFields] = useState(formFieldsData);
    const [disableButton, setDisableButton] = useState(false);

    const getFormValues = async (values) => {
        setFormFields(values);
        setDisableButton(true);
        try {
            await authApp.auth().signInWithEmailAndPassword(values[0].value, values[1].value);
            setDisableButton(false);
            alert('Log in successful!');
        } catch (err) {
            setDisableButton(false);
            alert(err.message);
        }
    }

    return (
        <FormComponent title={'Login'} fields={formFields} buttonLabel="Login" disableButton={disableButton}
            sendForm={getFormValues}></FormComponent>
    );
}

export default LoginComponent;