import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tasks = () => {

     const [title, setTitle] = useState('Lớp React');
     const [count, setCount] = useState(0);
     const [tasks, setTasks] = useState([]);

     function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      console.log('--------------------')
      const addTitle = (fullName) => {
           document.title = fullName
      }

      addTitle(title)

    const handleChangeInput = (e) => {
        const inputValue = e.target.value
        console.log(inputValue)
        setTitle(inputValue)
    }
    useEffect(() => {
        console.log('count', count)
        
    }, [count])

    ///khi count thay đổi
    const handleUpdate =(e) => {
        setCount(count + 1)
    }
    // const getTasks = () => {
    //     console.log('lan 1');
    //     return fetch('https://6162e891c483380017300785.mockapi.io/task');
    // };
    const getTaskList = async () => {
        try{
            const res = await fetch('https://6162e891c483380017300785.mockapi.io/task');
            return res;
        } catch (error) {
            console.log('error', error)
        }
    }
    
    useEffect(() => {
        console.log("title", title);
        getTaskList()
        .then((result) => result.json())
        .then((data) => setTasks(data));
    }, []);

    const arrTaskName = useMemo(() => {
         if(tasks.length > 0) {
            const arr = tasks.map(t => t.task_name)
            return arr;
         }
    },[tasks])

    const handleTotal = () => {
        console.log('1')
        
        const total = tasks.reduce((acc, t) => {
              return acc += t.time
        },0)
        return total;
    }
    const totalFunc = useCallback(() =>handleTotal(),[tasks])

    console.log('arrTaskName',arrTaskName)

    console.log(handleTotal())

    //useEffect thay thế cho componentDidMount, componentDidUpdate, ComponentWillUnmount và userEffect luôn chạy sau render()
    //là nơi thích hợp nhất để CALL API, animation,side effect, giúp tăng performance
    //có 2 tham số: là function và 1 mảng các điều kiện để useFfect có nên chạy lại hay kh
    
    return (
        <div>
        { console.log('render')}
        {
         console.log('time',totalFunc())
        }
        <button onClick={handleUpdate}>Cộng</button>

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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
        </div>
    )
}

export default Tasks;