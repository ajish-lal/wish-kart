import { Button, TextField, withStyles } from "@material-ui/core";

const ColoredTextField = withStyles({
    root: {
        '& .MuiFormLabel-root': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInputBase-root': {
            color: 'white',
        }
    },
})(TextField);

const FormComponent = props => {
    const values = { ...props.fields };

    const handleChange = ({ target }, index) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        let tempObj = { ...values[index] };
        tempObj.value = value;
        values[index] = tempObj;
    }

    const sendFormValues = (event) => {
        event.preventDefault();
        props.sendForm(values);
    }

    return (
        <form onSubmit={sendFormValues} className="form-container">
            <h1>{props.title}</h1>
            {props.fields.map((field, index) => (
                <ColoredTextField
                    key={index}
                    label={field.name}
                    style={{ margin: 8 }}
                    fullWidth
                    type={field.type}
                    defaultValue={field.value}
                    required={field.required}
                    error={field.hasError}
                    onChange={(event) => handleChange(event, index)}
                />
            ))}
            <br /><br /><br />
            <Button variant="contained" type="submit" disableElevation>{props.buttonLabel}</Button>
        </form>
    )
}

export default FormComponent;