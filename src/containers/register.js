import { useState } from "react";
import FormComponent from "../components/form";
import authApp from "../firebase";

const formFieldsData = [
    {
        name: "Username",
        type: "text",
        value: "Ajish",
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
                await authApp.auth().createUserWithEmailAndPassword(values[1].value, values[2].value);
                alert("Account created successfully");
            } catch (err) {
                alert(err.message);
                setDisableButton(false);
            }
        }
    }

    return (
        <FormComponent title={'Register'} fields={formFields} buttonLabel="Register" disableButton={disableButton}
            sendForm={getFormValues}></FormComponent>
    );
}

export default RegisterComponent;