import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import clsx from "clsx";
import styles from "./styles";
import { useParams } from "react-router";
import productActions from '../../../Redux/Actions/Products';
import { useProduct } from "../../../Redux/Hooks/Products";


const DetailProduct = ({ classes }) => {
  const { id } = useParams();
  const [desc, setDesc] = React.useState('');
  const [user, setUser] = React.useState('');

  const {products: { data }, actions} = useProduct()



  const productInfo = React.useMemo(() => {
    const item = data?.find(d => d.id === id);
    return item;
  }, [id, data]);

  const handleChangeDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }

  const handleClick = () => {
    const info = {
      id, desc, user
    }
    actions.addComment(info)
  }

  return (
    <div className={classes.customWrapDetail}>
      <div className={classes.itemOne}>
        <img
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt=""
          width="100%"
        />
      </div>
      <div>
        <h4>{productInfo.product_name}</h4>
        <p>
          {" "}
          <strong>Giá sản phẩm </strong>
        </p>
        <div>
          <Button variant="contained">Mua hàng</Button>
          <Button variant="outlined" className={classes.ml10}>
            Đặt hàng
          </Button>
        </div>
      </div>

      <div className={classes.itemOne}>
        <h2>Bình luận của bạn về sản phẩm</h2>
        <div className={classes.wrapComment}>
          <div className={classes.avata}>
            <span className={clsx(classes.w100, classes.textCenter)}>A</span>
          </div>
          <div className={classes.pdl10}>Sản phẩn đẹp</div>
        </div>

        <div className={classes.pdt10}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            className={classes.w100}
            onChange={handleChangeDesc}
          />

          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleChangeUser}/>
        </div>
        <Button variant="contained" disabled={!desc || !user} onClick={handleClick}>Comment</Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(DetailProduct);