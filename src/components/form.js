import { Button, TextField } from "@material-ui/core";

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
        <form onSubmit={sendFormValues}>
            {props.fields.map((field, index) => (
                <TextField
                    key={index}
                    label={field.name}
                    style={{ margin: 8 }}
                    fullWidth
                    type={field.type}
                    defaultValue={field.value}
                    error={field.hasError}
                    onChange={(event) => handleChange(event, index)}
                />
            ))}
            <Button variant="contained" type="submit" disableElevation>{props.buttonLabel}</Button>
        </form>
    )
}

export default FormComponent;