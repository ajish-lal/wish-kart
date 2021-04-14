import { useContext, useState } from "react";
import { Redirect } from "react-router";
import FormComponent from "../components/form";
import authApp from "../firebase";
import { AuthContext } from '../providers/auth'

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

    const currentUser = useContext(AuthContext);

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

    console.log(currentUser);
    if (currentUser) {
        return (
            <Redirect to="/"></Redirect>
        );
    }

    return (
        <FormComponent title={'Login'} fields={formFields} buttonLabel="Login" disableButton={disableButton}
            sendForm={getFormValues}></FormComponent>
    );
}

export default LoginComponent;