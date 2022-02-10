import './App.css';
import Homepage from "./pages/homepage";
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth,createUserProfilDocument } from './firebase/firebase'
import { Component } from 'react/cjs/react.production.min';
import { getDoc } from 'firebase/firestore';
import { setCurrentUser } from './Redux/user/user.actions'

class App extends Component {

  unsubscribeFromAuth=null;
  
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
      const userRef = await createUserProfilDocument(userAuth);
      const DocSnap= await getDoc(userRef);
      setCurrentUser({
        id: DocSnap.id,
        ...DocSnap.data()
      })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render(){
  return (
    <div >
      <Header />
      <Switch>
      
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shop}/>
      <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>) :(<SignInAndSignUp />) } />
      </Switch>
    </div>
  );
}
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchProps=dispatch=>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchProps)(App);

