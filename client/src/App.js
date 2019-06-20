import React, { Component } from 'react'
import { ShopList, NavBar, SignInUp } from './components';
import { Spinner } from 'react-bootstrap';

const Spin = ()=>{
  return(
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      favTabSelected: false,
      user: null,
      loading: false,
      allShop: [],
      toShow: []
    }
  }

  AuthenticateUser = (user) => {
    this.setState({
      authenticated: true,
      user: user,
      allShop: [], //need to see when to load...
      toShow: this.state.allShop.filter(x => !user.prefered.includes(x))
    })
  }

  loadingOn = () => this.setState({ laoding: true });

  loadingOff = () => this.setState({ laoding: false });

  render() {
    let { authenticated, loading, favTabSelected, user, toShow } = this.state;
    return (
      <>
        <NavBar />
        {loading && <Spin/>}
        {!authenticated
          && <SignInUp
            auth = {this.AuthenticateUser}
            loadingOff={this.loadingOff}
            loadingOn={this.loadingOn}
          />}

        {authenticated
          && <ShopList
            list={favTabSelected ? user.prefered : toShow} />}
      </>
    )
  }
}

export default App
