import React, { Component } from 'react'
//import  './style.css';
import {NavLink,Link} from 'react-router-dom';

//import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import $ from "jquery";
import jQuery from 'jquery';

//import jquery from 'jquery';
//window.$ = window.jQuery=jquery;


export default class Createproject extends Component {


// start  construct
constructor(props) {
  	super(props);

  this.state = {

  }


}
// end construct


//startcomponent MOUNT
componentDidMount() {

   this.fetchLogin();

}

//end componentmount










// start call1

fetchLogin() {



var url_forming= 'https://qbtut.com/mondayserver/';

// verify starts here

//check if session is set and prevent Direct Access to the App.

var userid_sess_data1 = localStorage.getItem('useridsessdata');

if (userid_sess_data1 == null || userid_sess_data1 == undefined) {

  alert('You Must Login To Access this Page');
window.location='/login';
//return false;
}



$(document).ready(function(){


var userid_sess_data = localStorage.getItem('useridsessdata');
var fullname_sess_data = localStorage.getItem('fullnamesessdata');
var email_sess_data = localStorage.getItem('emailsessdata');
var photo_sess_data = localStorage.getItem('photosessdata');
var user_rank_sess_data = localStorage.getItem('userranksessdata');
var teamingId_sess_data = localStorage.getItem('teamidsessdata');
var teamingName_sess_data = localStorage.getItem('teamnamesessdata');

$('.myd_tmID_sess').html(teamingId_sess_data);
//$('.myd_tmID_sess_val').val(teamingId_sess_data).value;
$('.myd_tmNAME_sess').html(teamingName_sess_data);


//alert(user_rank_sess_data);

//alert(fullname_sess_data);


var rec = "<span>" +
"<img src='https://qbtut.com/mondayserver/uploads/" + photo_sess_data +"'  style='text-align:left;border-radius:50%;width:40px;max-width:40px;height:40px;max-height:40px;border-style: solid; border-width:3px; border-color: #3b5998;'>" +
 "</span>";


var rec1 = "<span>" +
"<img src='https://qbtut.com/mondayserver/uploads/" + photo_sess_data +"'  style='text-align:left;border-radius:50%;width:30px;max-width:30px;height:30px;max-height:30px;border-style: solid; border-width:3px; border-color: #3b5998;'>" +
 "</span>";

$('.myd_photo_sess').html(rec);
$('.myd_photo_sess1').html(rec1);

$('.myd_fullname_sess').html(fullname_sess_data);
$('.myd_userid_sess').html(userid_sess_data);
$('.myd_rank_sess').html(user_rank_sess_data);


//$('#myd_userid_sess_value').val(userid_sess_data).value;
//$('#myd_userid_sess_id').html(userid_sess_data);


});

// verify eds here



//starts here
$(document).ready(function(){
           $('#project_btn').click(function () {
                 
                    var project_name = $('#project_name').val();
                    var details = $('#details').val();
                    var userid = localStorage.getItem('useridsessdata');
                   


var pn_check = project_name.length;

var details_check = details.length;


if(project_name==""){
alert('Please Enter Project Name');
$('#loader_project').hide();
$('#result_project').html("<div style='color:white;background:red;padding:10px;'>Please Enter Project Name</div>");
setTimeout(function(){ $('#result_project').html(''); }, 5000);
}


else if(pn_check  > 20){
alert('Project Name Cannot be more than 20 Characters');
$('#loader_project').hide();
$('#result_project').html("<div style='color:white;background:red;padding:10px;'>Project Name Cannot be more than 20 Characters</div>");
setTimeout(function(){ $('#result_project').html(''); }, 5000);
}




else if(details==""){
alert('please Enter Project Description');
$('#loader_project').hide();
$('#result_project').html("<div style='color:white;background:red;padding:10px;'>Please Enter Project Description</div>");
setTimeout(function(){ $('#result_project').html(''); }, 5000);

}


else if(details_check  > 30){
alert('Project Details Cannot be more than 30 Characters');
$('#loader_project').hide();
$('#result_project').html("<div style='color:white;background:red;padding:10px;'>Project Details Cannot be more than 30 Characters</div>");
setTimeout(function(){ $('#result_project').html(''); }, 5000);
}


else{


          var form_data = new FormData();
          form_data.append('project_name', project_name);
          form_data.append('details', details);
          form_data.append('userid', userid);
        

                    $('#loader_project').fadeIn(400).html('<br><span class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Your Project is being Processed...</span>');
                    $.ajax({
                        url: url_forming+'projects.php',
                        data: form_data,
                        processData: false,
                        contentType: false,
                        ache: false,
                        type: 'POST',
                       
                        success: function (msg) {
if(msg== 1){
alert('Project Successfully created');
$('#loader_project').hide();
$('#result_project').html("<div style='color:white;background:green;padding:10px;'>Project Successfully created.</div>");
setTimeout(function(){ $('#result_project').html(''); }, 5000);				
                             
$('#project_name').val('');
$('#details').val('');
//window.location="";
}

else{
alert('Project cannot  be Created. Please Ensure there is Internet connections');
$('#loader_project').hide();
$('#result_project').html("<div style='color:white;background:red;padding:10px;'>Project cannot  be Created. Please Ensure there is Internet connections.</div>");
setTimeout(function(){ $('#result_project').html(''); }, 5000);					
                       
}


                        }
                    });
} // end if validate


                });
            });


// ends here





}

// end call1



  render() {
    return (






      <div>

	  {/*  nav starts here */}
<nav class="navbar navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navgator">
        <span style={{background:"white"}} class="icon-bar"></span>
        <span style={{background:"white"}} class="icon-bar"></span>
        <span style={{background:"white"}} class="icon-bar"></span> 
        <span style={{background:"white"}} class="icon-bar"></span>                       
      </button>
     
<br /><span class='two_css img-circle'>Mondera</span>
    </div>
    <div class="collapse navbar-collapse" id="navgator">
      <ul class="nav navbar-nav navbar-right">

<span class="myd_photo_sess"></span>
<span class="myd_fullname_sess"></span>


	   
        <li title='Back to Dashboard'><NavLink to="/dashboard" style={{color:'black'}}>Back to Dashboard</NavLink></li>
       



      </ul>
    </div>
  </div>
</nav>


 {/*  nav ends here */}




{/*  start form   */}




<div class='row section_padding'>

<div class='col-sm-2' ></div>

<div class='col-sm-8' style={{background:'#ddd'}}>

<h4> <span class="myd_photo_sess"></span><br />
<span class="myd_fullname_sess"></span> (<span class="myd_rank_sess"></span>)
</h4>


  <h2 class="text-center"><span class='text_form'>Create Projects</span></h2>

<form id="" method="post">


 <div class="form-group">
              <label >Project Name Eg. My First Project (20 Characters Max)</label>
              <input maxlength="20" type="text" class="col-sm-12 form-control" id="project_name" name="project_name" placeholder="Enter Project name" />

            </div>


<div class=" form-group">
<label>Projects Descriptions (30 Characters Max)</label>
<textarea maxlength="30" class="col-sm-12 form-control" id="details"  name="details" placeholder="Enter Details"></textarea>
</div>

 
                    <div class="form-group">
                           

                        <div id="loader_project"></div>
                        <div id="result_project"></div>
                    </div>
<br /><br />

                    <input title="Create Project" type="button" id="project_btn" class="login_css" value="Create Project" />
                </form>
<br /><br /><br />





</div>


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
