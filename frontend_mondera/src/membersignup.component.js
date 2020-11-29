import React, { Component } from 'react'
//import  './style.css';
import {NavLink} from 'react-router-dom';

//import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import $ from "jquery";
import jQuery from 'jquery';

//import jquery from 'jquery';
//window.$ = window.jQuery=jquery;


export default class Membersignup extends Component {


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





   this.fetchMember();

}

//end componentmount










// start call1

fetchMember() {




var url_forming= 'https://qbtut.com/mondayserver/';
/*
function imagePreview(e) 
{
 var readImage = new FileReader();
 readImage.onload = function()
 {
  var displayImage = document.getElementById('imageupload_preview');
  displayImage.src = readImage.result;
 }
 readImage.readAsDataURL(e.target.files[0]);
}
*/

            $(document).ready(function(){
                $('#signup_admin_btn').click(function () {
                   
                     var team_id = $('#team_id').val();
                     var user_rank = $('#user_rank').val();
                    var email = $('#email').val();
                    var password = $('#password').val();
                    var confirm_password =$('#confirm-password').val();
                    var fullname = $('#fullname').val();
                    var file_fname = $('#file_content').val();
                    //preparing Email for validations
                    var atemail = email.indexOf("@");
                    var dotemail = email.lastIndexOf(".");



if(password != confirm_password){
alert('Password Does not Match');

}

if(team_id == ''){
alert('Team ID cannot be Empty. You will get this from Your Team Admin who created the Team');
return false;
}


// start if validate
if(file_fname==""){
alert('please Select File to Upload');
}

else if(email==""){
alert('please Enter Email Address');
}


else  if (atemail < 1 || ( dotemail - atemail < 2 )){
alert("Please enter valid email Address")
}

else if(password==""){
alert('please Enter Password');
}

else if(fullname==""){
alert('please Enter Your Fullname');
}

else if(user_rank==""){
alert('please Enter Your Profession');
}

else{

var fname=  $('#file_content').val();
var ext = fname.split('.').pop();
//alert(ext);

// add double quotes around the variables
var fileExtention_quotes = ext;
fileExtention_quotes = "'"+fileExtention_quotes+"'";

 var allowedtypes = ["PNG", "png", "gif", "GIF", "jpeg", "JPEG", "BMP", "bmp","JPG","jpg"];
    if(allowedtypes.indexOf(ext) !== -1){
//alert('Good this is a valid Image');
}else{
alert("Please Upload a Valid image. Only Images Files are allowed");
return false;
    }

          var form_data = new FormData();
          form_data.append('file_content', $('#file_content')[0].files[0]);
          form_data.append('file_fname', file_fname);
form_data.append('user_rank', user_rank);
          form_data.append('email', email);
          form_data.append('fullname', fullname);
          form_data.append('password', password);
 form_data.append('team_id', team_id);
                    $('.upload_progress').css('width', '0');
                    $('#btn').attr('disabled', 'disabled');
                    $('#loader').fadeIn(400).html('<br><span class="loader_css"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i> &nbsp;Please Wait, Your Data is being Submitted</span>');
                    $.ajax({
                        url: url_forming+'signup_member_action.php',
                        data: form_data,
                        processData: false,
                        contentType: false,
                        ache: false,
                        type: 'POST',
                        xhr: function () {
                      //var xhr = new window.XMLHttpRequest();
                            var xhr = $.ajaxSettings.xhr();
                            xhr.upload.addEventListener("progress", function (event) {
                                var upload_percent = 0;
                                var upload_position = event.loaded;
                                var upload_total  = event.total;

                                if (event.lengthComputable) {
                                    var upload_percent = upload_position / upload_total;
                                    upload_percent = parseInt(upload_percent * 100);
                                  //upload_percent = Math.ceil(upload_position / upload_total * 100);
                                    $('.upload_progress').css('width', upload_percent + '%');
                                    $('.upload_progress').text(upload_percent + '%');
                                }
                            }, false);
                            return xhr;
                        },
                        success: function (msg) {
                                $('#box').val('');
				$('#loader').hide();
				$('.result_data').fadeIn('slow').prepend(msg);
				$('#alertdata_uploadfiles').delay(5000).fadeOut('slow');
                                $('#alerts_reg').delay(5000).fadeOut('slow');
                                $('#alertdata_uploadfiles2').delay(20000).fadeOut('slow');
                                $('#save_btn').removeAttr('disabled');


//strip all html elemnts using jquery
var html_stripped = jQuery(msg).text();
//alert(html_stripped);

//check occurrence of word (successfully) from backend output already html stripped.
var Frombackend = html_stripped;
var bcount = (Frombackend.match(/successfully/g) || []).length;
//alert(bcount);

if(bcount > 0){
$('#file_fname').val('');
$('#email').val('');
$('#fullname').val('');
$('#password').val('');
$('#confirm-password').val('');
//$('#user_rank').val('');
}




                        }
                    });
} // end if validate
                });
            });






// start checking for email availability
$(document).ready(function(){
    $('#email').keyup(function(){ 
       var email = $('#email').val();
 if(email.length < 2) {
// ensure that user must type something first at least 2 characters before fetching database records
return false;
}
       var token = 101201;
        var ShowResult1 = $('#email_check');
            ShowResult1.html('<div class="loader_css">Checking Email Availability... <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  </div>'); // you can use loading animation here
           var datasend = "email="+ email + "&token=" + token;
            $.ajax({
            type : 'POST',
            data : datasend,
            url  : url_forming+'email_check.php',
            success: function(data){

                if(data == 0){
  ShowResult1.html('<br><div class="msg_green">This Email Address <b>('+email+')</b> is Available</div>');
                }
                else if(data > 0){
  ShowResult1.html('<br><div class="msg_pink" >This Email Address <b>('+email+')</b> is Taken. But You can still use it for another Team Invitation Registerations as long as it belongs to You...</div>');
                }
                else{
  ShowResult1.html('<br><div class="msg_red">We have problem with your Query.</div>');
                }
            }

            });
    });
});

// end checking for email availability





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

  <h2 class="text-center"><span class='text_form'>Members/Invitee SignUp</span></h2>

<form id="" method="post">

 <div class="form-group">
              <label style={{ padding: '6px', fontSize: '16px'}} for="tm">Team ID</label>
<br />
<div class="Team_info"><b>Info:</b>Ask Your Admin/Team head to give you the Team ID of the Team he created.</div>
<br />
              <input  style={{border: '5px solid #3b5998'}}  type="text" class="col-sm-12 form-control" id="team_id" name="team_id" placeholder="Enter Team Id" />
            </div>


<div class="form-group">
<label style={{ padding: '6px', fontSize: '16px'}}>Select Profile Photo: </label>
<input  class="col-sm-12 form-control" type="file" id="file_content" name="file_content" accept="image/*" onchange="imagePreview(event)" />
 <img id="imageupload_preview" alt=""/>
</div>


 <div class="form-group">
              <label style={{ padding: '6px', fontSize: '16px'}} for="email">Email</label>
              <input type="text" class="col-sm-12 form-control" id="email" name="email" placeholder="Enter email" />
<div class="result1" id="email_check"></div>
            </div>


 <div class="form-group">
              <label style={{ padding: '6px', fontSize: '16px'}} for="psw"> Password</label>
              <input type="password" class="col-sm-12 form-control" id="password" name="password" placeholder="Enter password" />
            </div>

 <div class="form-group">
              <label style={{ padding: '6px', fontSize: '16px'}} for="psw"> Confirm Password</label>
              <input type="password" class="col-sm-12 form-control" id="confirm-password" name="confirm-password" placeholder=" Confirm Password" />
            </div>



<div class="form-group">
              <label style={{ padding: '6px', fontSize: '16px'}} for="fullname"> FullName</label>
              <input type="text" class="col-sm-12 form-control" id="fullname" name="fullname" placeholder="Enter Full Name" />
            </div>

<input type='hidden' id="user_rank" name="user_rank" value="admin" />


                    <div class="form-group">
                            <div class="upload_progress" style={{width: "0%"}}>0%</div>

                        <div id="loader"></div>
                        <div class="result_data"></div>
                    </div>

                    <input type="button" id="signup_admin_btn" class="register_btn" value="Register Now" />
                </form>
<br /><br /><br />






</div>





<div class='col-sm-3' style={{background:'#ddd'}}></div>

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
