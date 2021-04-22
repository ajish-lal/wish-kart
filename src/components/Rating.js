import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useState } from "react";


const useStyles = makeStyles({
    root: {
        width: '90%',
        '& .MuiListItemIcon-root': {
            minWidth: 'auto'
        },
        '& .MuiSvgIcon-colorPrimary': {
            color: '#ffbc00'
        }
    }
});

const starRatings = [4, 3, 2, 1];

export default function RatingComponent() {
    const classes = useStyles();
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div className={classes.root}>
            <Typography variant="subtitle2">
                Rating
            </Typography>
            <List>
                {starRatings.map((value) => {
                    return (
                        <ListItem disableRipple key={value} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    color="primary"
                                    disableRipple
                                />
                            </ListItemIcon>
                            {[...Array(value)].map((elem, index) => (
                                <StarRateIcon key={index} color="primary"></StarRateIcon>
                            ))}
                            <Typography variant="caption">
                                & Up
                            </Typography>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}