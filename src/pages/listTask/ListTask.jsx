import React from 'react'
import "./listtasks.css"

import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';

import { Add } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function createData(Tasks, Status) {
    return { Tasks, Status};
}

const rows = [
    createData('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum mollitia tempora atque.', "in Process"),
    createData('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum mollitia tempora atque.', "compelete" ),
    createData('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum mollitia tempora atque.', "compelete", ),
    createData('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum mollitia tempora atque.', "compelete"),
    createData('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum mollitia tempora atque.', "compelete"),
];



const ListTask = () => {
    const classes = useStyles();
  return (
      <div className='list'>
          <div className='warp-list'>
              
                       
              <TableContainer component={Paper}>
                  <div className='add'>
                      <Link to="/task/add">
                          <Button variant="contained" color="primary" disableElevation>
                              <Add /> Add Task
                          </Button>
                      </Link>
                     
                  </div>
                          <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead>
                                  <TableRow>
                                      <TableCell>Task</TableCell>
                                      <TableCell align="left">Satatus</TableCell>
                                      <TableCell align="left">Operation</TableCell>
                                      
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                  {rows.map((row) => (
                                      <TableRow
                                          key={row.name}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                          <TableCell align="left">{row.Tasks}</TableCell>
                                          <TableCell align="left">{row.Status}</TableCell>
                                          
                                          <TableCell align="left">
                                              <div className='operation'>
                                                  <Button variant="contained" color="default" disableElevation>
                                                      Details
                                                  </Button>

                                                  <Button variant="contained" color="default" disableElevation>
                                                      Edit
                                                  </Button>


                                                  <Button variant="contained" color="default" disableElevation>
                                                      Delete
                                                  </Button>
                                              </div>
                                              
                                          </TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </TableContainer>
              
          </div>
      
      </div>
  )
}

export default ListTask