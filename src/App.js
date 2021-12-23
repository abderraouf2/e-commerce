import './App.css';
import Homepage from "./pages/homepage";
import {Route, Switch} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase'
import { Component } from 'react/cjs/react.production.min';

class App extends Component {

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/signin' component={signInAndSignUp}/>
      </Switch>
    </div>
  );
}
}

export default App;
