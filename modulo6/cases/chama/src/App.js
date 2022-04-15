
import { GlobalState } from './global/globalstate';
import { Home } from './pages/home/home';


const App = () => {
    return(
   <GlobalState>
       <Home/>      
   </GlobalState>
)
}

export default App;
