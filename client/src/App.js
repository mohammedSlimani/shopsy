import React, { Component } from 'react'
import { ShopList, NavBar, SignInUp } from './components';


export class App extends Component {
  constructor(){
    super();
    this.state = {
      authenticated : false,
      favTabSelected : false,
      user : {prefered:null},
      loading : false,
      allShop:[],
      toShow:[]
    }
  }
  render() {
    let { authenticated, favTabSelected, user:{prefered}, toShow} = this.state;
    return (
      <>
        <NavBar/>
        {!authenticated && <SignInUp/>}
        {authenticated && <ShopList list={favTabSelected? prefered : toShow }/> }
      </>
    )
  }
}

export default App
