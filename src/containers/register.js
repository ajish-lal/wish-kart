import { useState } from "react";
import FormComponent from "../components/form";

const formFieldsData = [
    {
        name: "Username",
        type: "text",
        hasError: false,
        required: true
    },
    {
        name: "Email",
        type: "email",
        hasError: false,
        required: false
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

    const getFormValues = (values) => {
        console.log(values, formFields);
        // Password matching
        if (values[2].value !== values[3].value) {
            values[3].hasError = true;
            setFormFields(values);
        } else {
            values[3].hasError = false;
            setFormFields(values);
        }
    }

    return (
        <FormComponent title={'Register'} fields={formFields} buttonLabel="Register" sendForm={getFormValues}></FormComponent>
    );
}

export default RegisterComponent;