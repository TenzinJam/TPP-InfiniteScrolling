import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    height: "300px",
    width: "15%",
    // borderRadius: 150/2,
    boxShadow: "grey",
    padding: "20px",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "grey",
    borderWidth: 1,
    borderColor: "#689451"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Pin({ image }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let date = image["created_at"].slice(0, 16)
  return (
    <Card className={classes.root} style={{ borderRadius: "150/2"}}>
      <CardHeader
        subheader={date} 
      />
      <CardMedia
        className={classes.media}
        image={image.images["136x136"].url}
        title={image.pinner["username"]}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <small>{image["like_count"]}</small>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{image.title}:</Typography>
          <Typography paragraph>
            {image.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// const myStyle = {
//   image: {
//     height: "200px",
//     width: "15%",
//     borderRadius: 150/2,
//     boxShadow: "grey",
//     padding: "40px",
//     shadowOffset: { width: 10, height: 10 },
//     shadowColor: "grey",
//     borderWidth: 1,
//     borderColor: "#689451"
//   }
// }
// export default function Pin({ image }) {

//   return (
//       <img  src= {image.images["136x136"].url} style={myStyle.image}/>
//   )
// }


