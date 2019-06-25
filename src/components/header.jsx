import React, { Component } from 'react';

import Navbar from './navbar';


class Header extends Component {
 state={
   name:"Nyangi aka slowly"
 }
    render() { 
        return (
 <div id="header" data-test='wrapper'>
  <div className="container">
    <div id="welcomeLine" className="row">
      <div className="span6" data-test='username'>Welcome!<strong>{this.state.name}</strong></div>
      <div className="span6">
        <div className="pull-right">
       
          <a href="/productssummary"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white" /> [ 3 ] Itemes in your cart </span> </a> 
        </div>
      </div>
    </div>
  </div>
  <Navbar />
  </div>
 
 );
    }
}
 
export default Header;