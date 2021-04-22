import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { Fragment } from 'react';
import { useProductService } from '../providers/product';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        border: '1px solid #e0e0e0',
        '& .MuiTypography-displayBlock': {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            width: '62%',
            fontSize: 14,
        }
    },
    content: {
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        textAlign: 'center',
    },
    total: {
        padding: '0px 16px',
        fontSize: 13
    },
    emptyCart: {
        margin: '52px 10px',
        textAlign: 'center',
        fontSize: 14
    }
}));

const CartComponent = ({ productData }) => {
    const classes = useStyles();
    const { cartData } = useProductService();
    const totalAmount = cartData.reduce((acc, curr) => (acc + curr.price * (curr.quantity)), 0);
    const totalItems = cartData.reduce((acc, curr) => (acc + curr.quantity), 0);

    return (
        <div className={classes.root}>
            <Grid>
                <Typography variant="h5" className={classes.title}>
                    My Wish-Kart
                </Typography>
                {cartData && cartData.length > 0 && <Fragment>
                    <div className={classes.content}>
                        <span className={classes.total}>Total items: {totalItems}</span>
                        <List>
                            {cartData.map((data, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={data.title}
                                        secondary={data.quantity + ' x ' + data.desc}
                                    />
                                    <ListItemSecondaryAction>
                                        Rs. {data.price}
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Total Amount"
                            />
                            <ListItemSecondaryAction>
                                Rs. {totalAmount}
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Fragment>}

                {cartData && cartData.length === 0 && <div className={classes.emptyCart}>
                    Add items to see the Magic!
                </div>}
            </Grid>
        </div>
    );
}

export default CartComponent;