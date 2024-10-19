import Typography  from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#23517d',
    },
    secondary: {
      main: '#d60868',
    },
    error: {
      main: '#9c2929',
    },
  },
};
const theme = createTheme(themeOptions);

function Login() {
    return (
      <ThemeProvider theme={theme}>
      <Grid container spacing={2} direction={"column"} sx={{margin:0,padding:0,textAlign:'left'}} > 
        <Grid>
        <Typography variant="h1" color="primary">Página Login Pablo Azael Carballo H1</Typography>
        </Grid>  
        <Grid>
        <Typography variant="h2" color="secondary">Página Login Pablo Azael Carballo H2</Typography>
        </Grid>
        <Grid>  
        <Typography variant="h3" color="error">Página Login Pablo Azael Carballo H3</Typography>
        </Grid>
        <Grid>
        <Typography variant="h3" color="primary">Página Login Pablo Azael Carballo H3</Typography>
        </Grid>
        <Grid>
        <Typography variant="subtitle1" color="blue">Página Login Pablo Azael Carballo subtitle1</Typography>
        </Grid>
        <Grid>  
        <Typography variant="body1" color="brown">Página Login Pablo Azael Carballo body1</Typography>
        </Grid>
        <Grid>  
        <Typography variant="caption" color="green">Página Login Pablo Azael Carballo caption</Typography>
        </Grid>
        <Grid>
        <Button variant="text">text</Button>
        </Grid>
        <Grid>
        <Button variant="contained" color="secondary">contained</Button>
        </Grid>
        <Grid>
        <Button variant="outlined" color="primary">outline</Button>
        </Grid>
     </Grid>
     </ThemeProvider>
    )
  }
  export default Login
  

