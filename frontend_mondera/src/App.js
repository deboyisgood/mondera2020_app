import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import Home from './home';

import  './monday_app.css';

import Adminsignup from './adminsignup.component';
import Membersignup from './membersignup.component';
import Login from './login.component';
import Multiplelogin from './multiplelogin.component';
import Dashboard from './dashboard.component';
import Dashboardnext from './dashboardnext.component';
import Dashboardnextalert from './dashboardnextalert.component';

import Createproject from './createproject.component';
import Createissue from './createissue.component';
import Userprofile from './userprofile.component';
import Myprofile from './myprofile.component';
import Myopenissue from './myopenissue.component';
import Mydoneissue from './mydoneissue.component';
import Projectissue from './projectissue.component';

import Openisuue from './openisuue.component';
import Doneisuue from './doneisuue.component';
import Viewedisuue from './viewedisuue.component';
import Logout from './logout.component';

 
class App extends Component {
constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      pStyle2: "",
    };
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
 
       <BrowserRouter>

 <div className="container">
<div className="heading"> 
     
<NavLink  to="/"></NavLink>



{this.state.mysession !== 101 &&
  <div className="heading-right">




<nav class="navbar navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navgator">
        <span class="one_css icon-bar"></span>
        <span  class="one_css icon-bar"></span>
        <span  class="one_css icon-bar"></span> 
        <span  class="one_css icon-bar"></span>                       
      </button>
     <br /><span class='two_css img-circle'>Mondera</span>

    </div>
    <div class="collapse navbar-collapse" id="navgator">
      <ul class="nav navbar-nav navbar-right">

        <li class="three_css"><NavLink to="/" class="one_css">Home</NavLink></li>

        <li class="three_css"><NavLink to="/adminsignup" class="one_css">Admin Signup</NavLink></li>

        <li class="three_css"><NavLink to="/membersignup" class="one_css">Member Signup</NavLink></li>

        <li class="three_css"><NavLink to="/login" class="one_css">Login</NavLink></li>



      </ul>
    </div>
  </div>
</nav>



 </div>}









</div>





            <Switch>
             <Route path="/" component={Home} exact/>
            
           
 <Route path="/adminsignup" component={Adminsignup}/>  
<Route path="/membersignup" component={Membersignup}/> 
<Route path="/login" component={Login}/>
<Route path="/multiplelogin" component={Multiplelogin}/>  
<Route path="/dashboard" component={Dashboard}/> 
<Route path="/createproject" component={Createproject}/>
<Route path="/createissue" component={Createissue}/>

 <Route path="/dashboardnext/:issueid/:teamid/:userid" component={Dashboardnext}/>

 <Route path="/dashboardnextalert/:issueid/:teamid/:userid/:notifyid" component={Dashboardnextalert}/>
<Route path="/userprofile/:teamid/:userid" component={Userprofile}/>
<Route path="/myprofile/:teamid/:userid" component={Myprofile}/>

<Route path="/myopenissue/:teamid/:userid" component={Myopenissue}/>
<Route path="/mydoneissue/:teamid/:userid" component={Mydoneissue}/>
<Route path="/projectissue/:teamid/:projectid" component={Projectissue}/>


<Route path="/openisuue/:teamid" component={Openisuue}/>
<Route path="/doneisuue/:teamid" component={Doneisuue}/>
<Route path="/viewedisuue/:teamid" component={Viewedisuue}/>

<Route path="/logout" component={Logout}/>
 
             
             
   
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

    );
  }
}
 

export default App;
//ReactDOM.render(<App />, document.getElementById('root'))