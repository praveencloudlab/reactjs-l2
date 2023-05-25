import {bootstrap} from '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
const App=()=>{

  return(
      <div className="container">
          <h1>Router Demo</h1>
          <hr/>

          <Home/>
         
      </div>
     
  )

}

export default App