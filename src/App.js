import './App.css';
import Homepage from "./pages/homepage";
import {Route, Switch} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';

function App() {


  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
