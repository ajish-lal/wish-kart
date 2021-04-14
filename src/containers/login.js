import FormComponent from "../components/form";

const formFields = [
    {
        name: "Username",
        type: "text",
        value: 'Sample',
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

const getFormValues = (values) => {
    console.log(values, formFields);
}

const LoginComponent = props => {

    return (
        <FormComponent title={'Login'} fields={formFields} buttonLabel="Login" sendForm={getFormValues}></FormComponent>
    );
}

export default LoginComponent;