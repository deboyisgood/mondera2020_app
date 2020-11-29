import React, { Component } from 'react'
//import  './style.css';
//import {NavLink} from 'react-router-dom';
 



export default class Logout extends Component {

  state = {

  }



componentDidMount() {
localStorage.clear();
window.location ='/';
}


  render() {
    return (


      <div>
<div>
<br /><br />
 <h3>You are about to logout........</h3>
</div>

     


     <br/>
        <br/>
        
      </div>

    )
  }



}
