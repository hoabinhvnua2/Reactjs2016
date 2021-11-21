import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import cardActions from '../../../Redux/Actions/Cards';

const Card = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.card.data);

  const handleUpToCard = (id, count) => {
    dispatch(cardActions.editToCard({id, count}))
  }

  const handleDownToCard = (id, count) => {
    dispatch(cardActions.editToCard({id, count}))
  }

  const handleDeleteToCard = (id) => {
    dispatch(cardActions.removeCard(id))
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 &&
            data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.product_name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                    <strong>{row.count}</strong>
                  <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleUpToCard(row.id, row.count + 1)}>
                    <ArrowDropUpIcon />
                  </IconButton>
                  <IconButton color="primary" disabled={row.count === 1} aria-label="add to shopping cart" onClick={() => handleDownToCard(row.id, row.count - 1)}>
                    <ArrowDropDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <Button variant="text" onClick={() => handleDeleteToCard(row.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Card;
