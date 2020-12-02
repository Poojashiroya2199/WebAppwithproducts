import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
    // paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ReviewCard(props) {
  const {
    name,
    description,
    type,
    poster,
    height,
    width,
    price,
    rating,
    onlike,
    oncart,
    like,
    addcart
  } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} title={description}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={name}
        subheader={description.slice(0, 30) + "..."}
      />
      <CardMedia className={classes.media} component="img" image={poster} />
      <Rating
        name="customized-10"
        value={rating}
        max={10}
        precision={0.1}
        size="small"
        readOnly
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: {price}/-
        </Typography>
        <Typography color="textSecondary" component="p">
          Type: {type}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => onlike(name)}>
          {like ? "💓" : "❤"}
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Button
          aria-label="add to cart"
          variant="contained"
          color="primary"
          onClick={() => oncart(name)}
        >
          {!addcart ? "Add to cart" : "Remove from cart"}
        </Button>
        <Button
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
