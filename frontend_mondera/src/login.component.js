import React, { Component } from 'react'
//import  './style.css';
import {NavLink} from 'react-router-dom';

//import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import $ from "jquery";
//import jQuery from 'jquery';

//import jquery from 'jquery';
//window.$ = window.jQuery=jquery;


export default class Login extends Component {


// start  construct
constructor(props) {
  	super(props);

  this.state = {

  }


}
// end construct


//startcomponent MOUNT
componentDidMount() {


//check if session is set and prevent Direct Access to the App.

var app_sess_data_check = localStorage.getItem('appsessdata');

const session  =   app_sess_data_check;
//alert('my sessioning: ' +session);

//const session= 101;
this.setState({mysession: session});





   this.fetchLogin();

}

//end componentmount










// start call1

fetchLogin() {



var url_forming= 'https://qbtut.com/mondayserver/';
//login starts
$(document).ready(function(){
                $('#login_btn').click(function () {
                 
                    var email = $('#email').val();
                    var password = $('#password').val();
                    

                    //preparing Email for validations
                    var atemail = email.indexOf("@");
                    var dotemail = email.lastIndexOf(".");

if(email===""){
alert('please Enter Email Address');
}

else  if (atemail < 1 || ( dotemail - atemail < 2 )){
alert("Please enter valid email Address")
}

else if(password===""){
alert('please Enter Password');
}

else{


          var form_data = new FormData();
          form_data.append('email', email);
          form_data.append('password', password);
        

                    $('#loader_login').fadeIn(400).html('<br><span class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Your Data is being Processed...</span>');
                    $.ajax({
                        url: url_forming+'login_action.php',
                        data: form_data,
                        processData: false,
                        contentType: false,
                        ache: false,
                        type: 'POST',
                       
                        success: function (msg) {
                                
				$('#loader_login').hide();
				$('#result_login').fadeIn('slow').prepend(msg);
                                $('#alerts_login').delay(10000).fadeOut('slow');
                                

$('#email').val('');
$('#password').val('');


                        }
                    });
} // end if validate
                });
            });


// login ends here





}

// end call1



  render() {
    return (






      <div>
<div>
<br /><br /><br />


{this.state.mysession == 101 &&
  <div className="heading-right">
<br /><br /><br />
<NavLink to="/dashboard"  style={{background:'Purple', color:'white', padding:'10px',borderRadius:'10%'}}>Please Continue to Dashboard</NavLink>
</div>}


<br />
 <h3><b>Mondera</b> is a Calendar Synched Issues/Bugs Management System Designed for Teams</h3>
</div><br />





{/*  start form   */}





<div class='row'>

<div class='col-sm-3'  style={{ fontFamily: '"Fira Code", monospace', background: '#ddd'}}></div>

<div class='col-sm-6'  style={{ fontFamily: 'vardana', background: '#ddd'}}>


  <h2 class="text-center"><span class='text_form'>Login..</span></h2>

<form id="" method="post">






 <div class="form-group">
              <label  style={{ padding: '6px', fontSize: '16px'}} for="email">Email</label>
              <input type="text" class="col-sm-12 form-control" id="email" name="email"  placeholder="Enter Email" />

            </div>


 <div class="form-group">
              <label  style={{ padding: '6px', fontSize: '16px'}} for="psw"> Password</label>
              <input type="password" class="col-sm-12 form-control" id="password" name="password" placeholder="Enter password" />
            </div>

 
                    <div class="form-group">
                           

                        <div id="loader_login"></div>
                        <div id="result_login"></div>
                    </div>
<br /><br />

                    <input type="button" id="login_btn" class="login_css" value="Login Now" />
                </form>
<br /><br /><br />






</div>





<div class='col-sm-3'></div>

</div>



{/*  end form   */}











      



       <br/>
        <br/>
            <br/>
        <br/>



        
      </div>

   
       )
  }



}
