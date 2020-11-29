import React, { Component } from 'react'
//import  './style.css';
import {NavLink} from 'react-router-dom';

//import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import $ from "jquery";
//import jQuery from 'jquery';

//import jquery from 'jquery';
//window.$ = window.jQuery=jquery;


export default class Multiplelogin extends Component {


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





   this.fetchMultiplelogin();

}

//end componentmount










// start call1

fetchMultiplelogin() {


var url_forming= 'https://qbtut.com/mondayserver/';

// load authentications starts here


$(document).ready(function(){

var photo_sess_data_m = localStorage.getItem('photosessdatamultiple');
var fullname_sess_data_m = localStorage.getItem('fullnamesessdatamultiple');
var userid_sess_data_m = localStorage.getItem('useridsessdatamultiple');
var email_sess_data = localStorage.getItem('emailsessdatamultiple');
var user_email = email_sess_data;
//var uid = userid_sess_data_m;


$('#my_name').html(fullname_sess_data_m);
$('#my_photo').html(photo_sess_data_m);


if (userid_sess_data_m === null || userid_sess_data_m === undefined) {

  alert('You Must Login To Access this Page');
//window.location='login.html';
window.location='/login';
//return false;
}




$('#loader_auth').fadeIn(400).html('<br><div class="well" style="color:black;padding:10px;background:#c1c1c1"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait, Loading Your Connected Accounts...</div>');
$.ajax({
        url: url_forming+'auth_multiple.php',
        type: 'get',
        dataType: 'JSON',
        data: {user_email:user_email},
        crossDomain: true,
        cache:false,
        success: function(response){

if(!response){
$('#loader_auth').hide();

$("#result_auth").append("<div style='color:white;background:red;padding:10px;'>You have no Account Yet.</div>");
$('#loader_auth').hide();




}

            var record_length = response.length;
            for(var i=0; i<record_length; i++){
                var id = response[i].id;
                 var userid = id;
                var fullname = response[i].fullname;
                var photo = response[i].photo;
                var team_name= response[i].team_name;
                var teamname= team_name;
                var teamIdentity= response[i].team_identity;

var rec_data = "<div id='Records' class='auth1_css'>" +

//"<img src=" + friend_photo +"  style='border-radius:50%;width:40px;max-width:40px;height:40px;max-height:40px;'>" +
"<img src='https://qbtut.com/mondayserver/uploads/" +photo +"' style='border-radius:50%;width:40px;max-width:40px;height:40px;max-height:40px;'>" +
"<div style=''>Name: " + fullname + "</div>" +
"<div style=''><h4>Team Name: " + team_name + "</h4></div>" +
"<div style=''><h4>Team Id: " + teamIdentity + "</h4></div>" +

                        "<div class='loader-m_"+ userid +"'></div>"+
                        "<div class='result-m_"+ userid +"'></div>"+

"<button title='Authorize' data-teamid=\""+ teamIdentity+"\" data-userid=\""+ userid+"\"  data-teamname=\""+ teamname +"\" data-fullname=\""+ fullname +"\" data-photo=\""+ photo +"\"  class='continue_btn1 login_css'>Choose an Account to Proceed</button><BR>"+

                   "</div><p></p>";

                $("#result_auth").append(rec_data);

            }

$('#loader_auth').hide();
        }
    });
});

// Load authentications ends here




// start mulptiple login

        $(document).ready(function(){

$(document).on( 'click', '.continue_btn1', function(){ 
           
var userid = $(this).data('userid');
var id= userid;
var teamname = $(this).data('teamname');
var teamId = $(this).data('teamid');

//var fname = $(this).data('fullname').value;
//var photo = $(this).data('photo');

// confirm start
 //if(confirm("Are you sure you want to Continue: ")){
if (window.confirm("Are you sure you want to Continue:")) {

$(".loader-m_"+id).fadeIn(400).html('<br><div style="color:black;background:white;padding:10px;"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait, Processing...</div>');
var datasend = {'userid': userid, 'teamname': teamname, teamId: teamId};
		$.ajax({
			
			type:'POST',
			url:url_forming+'auth_verify.php',
			data:datasend,
                        crossDomain: true,
			cache:false,
			success:function(msg){


	//if(msg == 1){

$(".loader-m_"+id).hide();
//$(".result-m_"+id).html("<div style='color:white;background:green;padding:10px;'>Authenticating</div>");
$(".result-m_"+id).html(msg);
setTimeout(function(){ $(".result-m_"+id).html(''); }, 5000);
//location.reload();
//}


}
			
});
}

// confirm ends



})
});

// end multiple login



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

  <h2 class="text-center"><span class='text_form'>It seems You have Multiple Teams..<br />
(<span style={{color:"black"}} id="my_name"></span>)</span></h2>

<div id="loader_auth"></div>
<div id="result_auth"></div>

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
