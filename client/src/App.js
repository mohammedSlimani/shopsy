import React, { Component } from 'react'
import { ShopList, NavBar, SignInUp } from './components';
import { Spinner } from 'react-bootstrap';
import ApiService from './utils/Api';

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
    this.api = new ApiService() /// This is Baaaad.... shouldn't be here
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
    });
    this.getAllShops();
  }

  getAllShops = async() => {
    const allShop = await this.api.get('/shops'); //Not a good way: Should separate the logic from display
    this.setState({
      allShop:allShop
    })
  }

  loadingOn = () => this.setState({ laoding: true });

  loadingOff = () => this.setState({ laoding: false });

  like = (shop_id) =>{
    this.api.put(`/users/${this.state.user._id}/like/${shop_id}`);
    this.updateFav();
  }

  dislike = (shop_id) => {
    this.api.put(`/users/${this.state.user._id}/dislike/${shop_id}`);
    this.updateFav();
  }

  updateFav = async() =>{
    let fav = await this.api.get(`/users/${this.state.user._id}/shops`);
    this.setState({
      user:{
        prefered:fav
      }
    })
  }

  toggelShowAll = ()=>{
    this.setState({
      favTabSelected: false,
    })
  }

  toggelShowFav = () => {
    this.setState({
      favTabSelected: true,
    })
  }  

  render() {
    let { authenticated, loading, favTabSelected, user, allShop } = this.state;
    return (
      <>
        <NavBar 
          toggelShowAll = {this.toggelShowAll}
          toggelShowFav = {this.toggelShowFav} 
        />
        {loading && <Spin/>}
        {!authenticated
          && <SignInUp
            auth = {this.AuthenticateUser}
            loadingOff={this.loadingOff}
            loadingOn={this.loadingOn}
            />}

        {authenticated
          && <ShopList
            like={this.like}
            dislike={this.dislike}
            list={favTabSelected ? user.prefered : allShop} />}
      </>
    )
  }
}

export default App
