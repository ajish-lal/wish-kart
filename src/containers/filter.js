import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from "@material-ui/core/Slider";
import { useEffect, useState } from "react";
import RatingComponent from "../components/Rating";
import { useProductService } from "../providers/product";

const useStyles = makeStyles({
    root: {
        width: '90%',
        '& .MuiListItemIcon-root': {
            minWidth: 'auto'
        }
    }
});

const FilterComponent = ({ results }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const { setProductList } = useProductService();

    useEffect(() => {
        setProductList(results);
    }, []);

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

    const handleSliderChange = (event, value) => {
        setProductList(results.filter((data) => data.price <= value));
    }

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
                <Typography id="discrete-slider" gutterBottom variant="subtitle2">
                    Price (Rs.)
                </Typography>
            </div>

            <div style={{ width: '76%' }}>
                <Slider
                    defaultValue={1000}
                    valueLabelDisplay="auto"
                    step={500}
                    marks
                    min={1000}
                    max={3000}
                    onChangeCommitted={handleSliderChange}
                />
            </div>
        </div>
    );
}

export default FilterComponent;