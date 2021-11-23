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
import { useDispatch, useSelector } from "react-redux";
import cardActions from '../../../Redux/Actions/Cards';
import { useProduct } from "../../../Redux/Hooks/Products";

const MediaCard = ({classes}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.data);

    const {products, actions} = useProduct();

    console.log('products', products);
    console.log('actions', actions);
  return (
    <div className={classes.customWrapper}>
      {
        data.length > 0 && data.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index.toString()}>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.product_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => dispatch(cardActions.addToCard({id: item.id, product_name: item.product_name}))}>Mua Hàng</Button>
            {/* <Button size="small">Bình Luận</Button> */}
            <Link to={`/product/${item.id}`}>Bình Luận</Link>
          </CardActions>
        </Card>
        ))
      }
    </div>
  );
}

export default withStyles(styles)(MediaCard)