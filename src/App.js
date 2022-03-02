import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth,createUserProfilDocument,AddCollectionsAndDocs } from './firebase/firebase'
import { Component } from 'react/cjs/react.production.min';
import { getDoc } from 'firebase/firestore';
import { setCurrentUser } from './Redux/user/user.actions';
import { selectCurrentUser } from './Redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import { selectCategory } from './Redux/shop-page/shop_page.selector';

import Homepage from "./pages/homepage/homepage";
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Checkout from './components/checkout/checkout';

class App extends Component {


  unsubscribeFromAuth=null;
  
  componentDidMount() {
    const { setCurrentUser,collectionsArray } = this.props;
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
      AddCollectionsAndDocs('collections',Object.keys(collectionsArray).map(({title, items})=>({
        title,
        items
      })));
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
      <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
}
}
const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCategory
})

const mapDispatchProps=dispatch=>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchProps)(App);

