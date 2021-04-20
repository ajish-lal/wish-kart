import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTypography-displayBlock': {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            width: '62%',
        }
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        textAlign: 'center',
    },
}));

const CartComponent = ({ productData }) => {
    const classes = useStyles();

    const data = [
        {
            id: "1",
            title: "Moda Rapido",
            desc: "Printed Round Neck T-shirt",
            price: 1320,
            quantity: 2
        }, {
            id: "2",
            title: "Roadster",
            desc: "Solid Round Neck T-shirt",
            price: 920,
            quantity: 10,
        }
    ]

    return (
        <div className={classes.root}>
            <Grid>
                <Typography variant="h5" className={classes.title}>
                    My Wish-Kart
                </Typography>
                <div className={classes.demo}>
                    <List>
                        {data.map((data, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={data.title}
                                    secondary={data.desc}
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
                            Rs. {2240}
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Grid>
        </div>
    );
}

export default CartComponent;