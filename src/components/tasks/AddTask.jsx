import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@mui/material/TextField';
import "./addtask.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@material-ui/core/Button';


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

const AddTask =() =>{
    const classes = useStyles();
    const[age, setAge] = React.useState('');
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
      <div className='addtask'>
          <div className='warp-addtask'>
              <Card className={classes.root} variant="outlined">
                  <CardContent>
                      <form>

                          <TextField
                              label="Size"
                              id="standard-size-normal"
                              variant="standard"
                          />

                          <div className='group'>

                              <TextField
                                  label="Start Date"
                                  type="date"
                                  id="standard-size-normal"
                                  variant="standard"
                              />
                             
                              <TextField
                                  label="Finish Date"
                                  type="date"
                                  id="standard-size-normal"
                                 
                                  variant="standard"
                              />
                          </div>

                          <TextareaAutosize
                              aria-label="minimum height"
                              minRows={20}
                              placeholder="Task Description"
                              style={{ width: "100%" }}
                          />

                          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                              
                              <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  onChange={handleChange}
                                  label="Age"
                              >
                                  <MenuItem value="">
                                      <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                          </FormControl>
                          <Button variant="contained" color="primary" disableElevation>
                              Add
                          </Button>
                    </form>


                  </CardContent>
              </Card>
          </div>
          </div>
  )
}

export default AddTask