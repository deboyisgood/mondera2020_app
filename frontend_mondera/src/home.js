import React, { Component } from 'react'
//import  './style.css';
import {NavLink} from 'react-router-dom';
 


export default class Home extends Component {

  state = {

  }



componentDidMount() {

//check if session is set and prevent Direct Access to the App.

var app_sess_data_check = localStorage.getItem('appsessdata');

const session  =   app_sess_data_check;
//alert('my sessioning: ' +session);

//const session= 101;
this.setState({mysession: session});



}


  render() {
    return (


      <div style={{ }}>
<div>
<br /><br />
<br /><br />


{this.state.mysession === 101 &&
  <div className="heading-right">
<br /><br /><br />
<NavLink to="/dashboard"  style={{background:'Purple', color:'white', padding:'10px',borderRadius:'10%'}}>Please Continue to Dashboard</NavLink>
</div>}



 <h3><b>Mondera</b> is a Calendar Synched Issues/Bugs Management System Designed for Teams</h3>
</div><br />

<br />
If You are the Team Head/Admin, Please use Admin Signup to Register Your Team. You can Create Unlimited Teams just with
One Email Address and Our Application will sync all your Team Access Data seperately.<br />

 Upon Successful Registrations,
You will be assigned a <b>Team ID</b>. Please Copy the Team Id from Your Applcatio Dashboard when you login and share it
with your fellow team Members who will register via <b>Member Signup</b> option.<br /><br />

<center><img src="https://qbtut.com/mondayserver/team_up.png" alt="" class="img-rounded" /></center>
      
     


       <br/>
        <br/>
            <br/>
        <br/>

     <br/>
        <br/>
     <br/>
        <br/>
        
      </div>

    )
  }



}
