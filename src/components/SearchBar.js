import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export default function SearchBarComponent() {
    const classes = useStyles();

    return (
        <Paper variant="outlined" component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Find your wish..."
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
