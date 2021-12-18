import './App.css';
import Homepage from "./pages/homepage";
import {Route, Switch} from 'react-router-dom'

function App() {

  const hatspage=()=>{
    return <h1>HAts page</h1>
  }


  return (
    <div >
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/hats' component={hatspage}/>
      </Switch>
    </div>
  );
}

export default App;
