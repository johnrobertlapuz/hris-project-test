import './App.css';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { teal, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root : {
      background : 'linear-gradient(45deg, #FE688B , #FF8E53)',
      border : 0,
      marginBottom : 15,
      borderRadius : 15,
      color : 'white' ,
      padding : '5px 30px'
    }
  })
  
  const theme = createMuiTheme({
    palette : {
      primary : {
       main : teal[500],
      },
      secondary : {
        main : blue[500],
      }
    }
  })
  
  function ButtonStyled( ) {
    const classes = useStyles( );
   return <Button className = {classes.root}>Submit</Button>
  
  }
  function App( ) {
    return (
      <ThemeProvider theme ={theme}>
        
        <header className="App-header">
          
           <ButtonStyled/>
            <TextField variant = "outlined" color ="primary" label = "Email" placeholder = "youremail@example.com"/>
            <TextField variant = "outlined" color ="primary" label = "Complete Name" placeholder = "lastname, firstname, maidens name"/>
            <TextField variant = "outlined" color ="primary" label = "Message"/>
   
            <TextField>Hindi ko pa alam kung paano import yung mga nasa button and textfield folders dito po sa app.js through import sa taas heeeelp mastah </TextField>
        </header>
      </ThemeProvider>
    );
  }
  export default App;
  