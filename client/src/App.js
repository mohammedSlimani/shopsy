import React, { Component } from 'react'
import { ShopList, NavBar, SignInUp } from './components';
import ApiService from './utils/Api';
import UserProfile from './utils/UserProfile';

export class App extends Component {
  constructor() {
    super();
    this.api = new ApiService(); /// This is Baaaad.... shouldn't be here
    this.state = {
      authenticated: false,
      favTabSelected: false,
      user: null,
      loading: false,
      allShop: [],
      toShow:[],
      fav:[]
    }
  }

  AuthenticateUser = async (user) => {
    //Save the user to the cookie
    UserProfile.setUser(user);

    //Save the User in the state.
    this.setState({
      authenticated: true,
      user: user,
    });
    await this.getAllShops();
    await this.updateFav();
  }

  tweakShopsToShow = () => {
    //filtering The Shops to show
    let toShow = this.state.allShop.filter(x=>this.state.fav.every(favorite=>favorite._id !== x._id));
    this.setState({
      toShow:toShow
    })
  }

  getAllShops = async() => {
    const allShop = await this.api.get('/shops'); //Not a good way: Should separate the logic from display
    this.setState({
      allShop:allShop
    })
  }

  updateFav = async() =>{
    let fav = await this.api.get(`/users/${this.state.user._id}/shops`);
    this.setState({
      fav:fav
    })
    this.tweakShopsToShow();
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

  like = async (shop_id) => {
    await this.api.put(`/users/${this.state.user._id}/like/${shop_id}`);
    this.updateFav();
  }

  dislike = async (shop_id) => {
    await this.api.put(`/users/${this.state.user._id}/dislike/${shop_id}`);
    this.updateFav();
  }

  logout = ()=>{
    this.setState({
      authenticated:false,
      user:null,
    })
  }

  componentWillMount(){
    //If a user has already connected then let's keep him connected.
    if(UserProfile.getUser()){
      this.setState({
        authenticated:true,
        user:UserProfile.getUser()
      })
    }
  }

  render() {
    let { authenticated, favTabSelected, fav, toShow } = this.state;
    return (
      <>
        <NavBar 
          toggelShowAll = {this.toggelShowAll}
          toggelShowFav = {this.toggelShowFav}
          authenticated = {this.state.authenticated}
          user = {this.state.user}
          logout = {this.logout}
        />
        {!authenticated
          && <SignInUp
            auth = {this.AuthenticateUser}
            />}

        {authenticated
          && <ShopList
            like={this.like}
            dislike={this.dislike}
            list={favTabSelected ? fav : toShow} />}
      </>
    )
  }
}

export default App
