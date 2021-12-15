import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor } from './colors';
import { neutralColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
     
      main: primaryColor,

      contrastText: "white"
    },
    text:{
        primary: neutralColor
    }
   
  }
})

export default theme