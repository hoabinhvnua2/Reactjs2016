import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withStyles } from '@mui/styles';
import styles from './styles';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cardActions from '../../../Redux/Actions/Cards';

const MediaCard = ({classes}) => {
    const dispatch = useDispatch();
  return (
    <div className={classes.customWrapper}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => dispatch(cardActions.addToCard({id: 1, product_name: 'ABC'}))}>Mua Hàng</Button>
          {/* <Button size="small">Bình Luận</Button> */}
          <Link to="/product/1">Bình Luận</Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => dispatch(cardActions.addToCard({id: 2, product_name: 'Iphone'}))}>Mua Hàng</Button>
          {/* <Button size="small">Bình Luận</Button> */}
          <Link to="/product/1">Bình Luận</Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(MediaCard)