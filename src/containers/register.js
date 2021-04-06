import FormComponent from "../components/form";

const formFields = [
    {
        name: "Username",
        type: "text",
        value: 'Sample',
        hasError: false
    },
    {
        name: "Email",
        type: "email",
        hasError: true
    },
    {
        name: "Password",
        type: "password",
        hasError: false
    },
    {
        name: "Confirm Password",
        type: "password",
        hasError: false
    }
]

const RegisterComponent = props => {
    const getFormValues = (values) => {
        console.log(values, formFields);
    }

    return (
        <FormComponent fields={formFields} buttonLabel="Register" sendForm={getFormValues}></FormComponent>
    );
}

export default RegisterComponent;