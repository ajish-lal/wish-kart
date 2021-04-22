import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import RatingComponent from "../components/Rating";

const useStyles = makeStyles({
    root: {
        width: '90%',
    }
});

const FilterComponent = () => {
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
        <div className="filter-container">
            <Typography gutterBottom variant="h6" paragraph>
                Filters
            </Typography>

            <RatingComponent></RatingComponent>

            <div className={classes.root}>
                <Typography id="discrete-slider" variant="subtitle2">
                    Brand
                </Typography>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

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
                                <ListItemText id={labelId} primary={`Brand Name ${value + 1}`} />
                            </ListItem>
                        );
                    })}
                </List>
            </div>

            <div className={classes.root}>
                <Typography id="discrete-slider" gutterBottom variant="subtitle2">
                    Price (Rs.)
                </Typography>
                <Slider
                    defaultValue={1000}
                    valueLabelDisplay="auto"
                    step={500}
                    marks
                    min={0}
                    max={2000}
                />
            </div>
        </div>
    );
}

export default FilterComponent;