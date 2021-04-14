import FormComponent from "../components/form";

const formFields = [
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
        required: true
    }
]

const RegisterComponent = props => {
    const getFormValues = (values) => {
        console.log(values, formFields);
    }

    return (
        <FormComponent title={'Register'} fields={formFields} buttonLabel="Register" sendForm={getFormValues}></FormComponent>
    );
}

export default RegisterComponent;