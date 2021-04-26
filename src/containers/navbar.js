import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../providers/auth';
import LoaderComponent from '../components/Loader';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    background: {
        background: 'linear-gradient(0.25turn, #4791db, #4caf50);'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Products = lazy(() => import('../pages/products/Products'));

function NavigationBar(props) {
    const classes = useStyles();
    const { logout } = useAuth();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.background}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Products
                    </Typography>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Suspense fallback={<LoaderComponent showLoader={true}></LoaderComponent>}>
                <Products></Products>
            </Suspense>
        </div>
    );
}

export default NavigationBar;