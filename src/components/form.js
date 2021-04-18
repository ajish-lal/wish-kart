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

const StyledButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0022ff59',
        borderColor: '#0022ff59',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
        '&:disabled': {
            color: '#e0e0e0b5',
            backgroundColor: '#0022ff59',
            borderColor: '#0022ff59',
        }
    },
})(Button);

const FormComponent = props => {
    const values = [...props.fields];

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
                    helperText={field.hasError ? field.errorMsg : ''}
                    required={field.required}
                    error={field.hasError}
                    onChange={(event) => handleChange(event, index)}
                />
            ))}
            <br /><br /><br />
            <StyledButton variant="contained" type="submit" disableElevation color="primary" fullWidth
                disabled={props.disableButton}>{props.buttonLabel}</StyledButton>

            {props.children}
        </form>
    )
}

export default FormComponent;