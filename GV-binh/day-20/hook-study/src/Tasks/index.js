import React, { useState, useEffect, useMemo, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tasks = () => {
  const [title, setTitle] = useState("Lớp React");
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const handleChangeInput = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    setTitle(inputValue);
  };

  const handleUpdate = (e) => {
    setCount(count + 1);
  };

//   const getTasks = () => {
//     console.log("lan 1");
//     return fetch("https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/task");
//   };


  const getTaskList = async () => {
    try {
        const res = await fetch("https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/task");
        return res
    } catch (error) {
        console.log('err', error)
    }
  };

  useEffect(() => {
    console.log("title", title);
    getTaskList().then(result => result.json()).then(data => setTasks(data))
  }, []);

 const arrTaskName = useMemo(() => {
    if(tasks.length > 0) {
        const arr = tasks.map(t => t.task_name)
        return arr;
    }
    return;
 }, [tasks])


 const handleTotal = (task) => {
     console.log('1')
     const total = task.reduce((acc, t) => {
        return acc += t.time
     }, 0)

     return total
 }

const totalFunc = useCallback(() => handleTotal(tasks), [tasks])



 console.log('arrTaskName', arrTaskName)

//   useEffect thay thế cho componentDidMount, componentDidUpdate, componentWillUnmount và useEffect luôn luôn chạy sau rende r()
// nó là noi thích hợp nhất để call API, animation, side effect. và nó giúp tăng performance
// useEffect nhận vào 2 tham số, tham số 1 là 1 function, tham số thứ 2 là một mảng các điều kiện để useEffect biết có nên chạy lại hay không

  return (
    <>
      {console.log("render")}

      { console.log(totalFunc()) }

      <button onClick={handleUpdate}> Cộng </button>
      <input type="text" onChange={handleChangeInput} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tasks;
