import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 5,
    "& .MuiTypography-root": {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& .MuiTypography-h6": {
      fontSize: "1rem",
    },
    "& .MuiCardMedia-img": {
      height: '100%'
    },
    "& .MuiCardActions-root": {
      justifyContent: "center",
    },
  },
});

function DisplayCardComponent({
  data: { title, desc, imgUrl, price },
  children,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea disableRipple disabled>
        <CardMedia
          component="img"
          alt={title}
          height="240"
          image={imgUrl}
          title={title}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {desc}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Rs. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>{children}</CardActions>
    </Card>
  );
}

export default DisplayCardComponent;
