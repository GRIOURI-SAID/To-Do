import React from 'react'
import "./login.css"

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const Login =()  =>{
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
      };
  return (
    
        
        <div className='login'>
        <div className='warp-login'>
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <form>
                <div className='logo-img'>
                    <h2>YOUR LOGO</h2>
                </div>

                     <FormControl>
                       <InputLabel htmlFor="component-simple">User</InputLabel>
                      <Input id="component-simple" value={name} onChange={handleChange} />
                          </FormControl>
                          
                          <FormControl>
                              <InputLabel htmlFor="component-simple">Password</InputLabel>
                              <Input type='password'  id="component-simple" />
                          </FormControl>

                          <Button variant="contained" color="primary" disableElevation>
                             Log in
                          </Button>
                          <Link to='/sginUp'>
                           <Button variant="contained" color="default" disableElevation>
                              Sign up
                              
                              </Button>
                          </Link>
                      </form>
                      
                      <Typography className={classes.pos} color="textSecondary">
                          Tasks Management Application 
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                          Module 2 project by :Said Griouri
                      </Typography>
            </CardContent>
            </Card>
        </div>
        
    </div>
        
    
    
  
  )
}

export default Login