import React, { Component } from 'react'
//import  './style.css';
import {NavLink,Link} from 'react-router-dom';

//import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import $ from "jquery";
import jQuery from 'jquery';

//import jquery from 'jquery';
//window.$ = window.jQuery=jquery;


export default class Createissue extends Component {


// start  construct
constructor(props) {
  	super(props);

  this.state = {

  }


}
// end construct


//startcomponent MOUNT
componentDidMount() {

   this.fetchIssue();

}

//end componentmount










// start call1

fetchIssue() {



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

// verify ends here








//start 1
$(document).ready(function(){
$('#loader_pro1').fadeIn(400).html('<br><div class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Project is being Loaded...</div>');
                  var team_id = localStorage.getItem('teamidsessdata');
			$.ajax({
				url: url_forming+'project_load.php',
				type: 'post',
				data: {team_id: team_id},
				dataType: 'json',
				success: function(response){
					
					var len = response.length;
//startif
if(len == 0){
$("#project_select_empty").html("<div style='background:red;color:white;padding:10px;'>Please Create Project First before creating Issues</div>");
$('#loader_pro1').hide();

}else{

		            for( var i = 0; i<len; i++){
		                var id = response[i]['id'];
		                var project_name = response[i]['project_name'];
		                    
		                $("#project_select").append("<option name='projectid' class='projectid' value='"+id+"'>"+project_name+"</option>");
                                $('#loader_pro1').hide();

		            }

}
//end if



				}
			});
			
		});
//end 1






//starts here


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



$(document).ready(function(){
           $('#issue_btn').click(function () {

                 
                    var title = $('#title').val();
                    var details = $('#details').val();
                    var status = $('#status').val();
                    var priority = $('#priority').val();
                    var projectid = $('.projectid').val();
  
                    var userid = localStorage.getItem('useridsessdata');
                    var teamid = localStorage.getItem('teamidsessdata');

var file_fname = $('#file_content').val();



// if process 1 starts here
if(file_fname == ''){

if(projectid== 0){
alert('Please Select Project Name');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Select Project Name</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);
}


else if(title==""){
alert('Please Enter Issue Title');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Enter Issue Title</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);

}

else if(details==""){
alert('please Enter Issue Details');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Enter Issue Details</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);

}

else if(status==""){
alert('Please Select Status');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Select Status</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);
}

else if(priority==""){
alert('Please Select Priority');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Select Priority</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);
}




else{


          var form_data = new FormData();
          form_data.append('title', title);
          form_data.append('details', details);
form_data.append('status', status);
form_data.append('priority', priority);
form_data.append('projectid', projectid);
form_data.append('userid', userid);
  form_data.append('teamid', teamid);
              

                    $('#loader_issue').fadeIn(400).html('<br><span class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Your Issue is being Processed...</span>');
                    $.ajax({
                        url: url_forming+'issues.php',
                        data: form_data,
                        processData: false,
                        contentType: false,
                        ache: false,
                        type: 'POST',
                       
                        success: function (msg) {



if(msg==77){
alert('Error: Please Create Projects First before creating an Issue');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Error: Please Create Projects First before creating an Issue.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				                
}


else if(msg== 1){
alert('Issue Successfully created');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:green;padding:10px;'>Issue Successfully created.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
                             
$('#title').val('');
$('#details').val('');
$('#status').val('');
$('#priority').val('');


//window.location="";
}

else{
alert('Issue cannot  be Created. Please Ensure there is Internet connections');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Issue cannot  be Created. Please Ensure there is Internet connections.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);					
                       
}

                                
                             
                                

                        }
                    });
} // end if validate



}
//if process 1 ends here








//if process 2 starts here

if(file_fname != ''){


if(projectid== 0){
alert('Please Select Project Name');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Select Project Name</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);
}


else if(title==""){
alert('Please Enter Issue Title');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Enter Issue Title</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);

}

else if(details==""){
alert('please Enter Issue Details');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Enter Issue Details</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);

}

else if(status==""){
alert('Please Select Status');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Select Status</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);
}

else if(priority==""){
alert('Please Select Priority');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Please Select Priority</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);
}




else{


          var form_data = new FormData();
          form_data.append('title', title);
          form_data.append('details', details);
form_data.append('status', status);
form_data.append('priority', priority);
form_data.append('projectid', projectid);
form_data.append('userid', userid);
  form_data.append('teamid', teamid);
form_data.append('file_content', $('#file_content')[0].files[0]);
          form_data.append('file_fname', file_fname);
              
$('.upload_progress').css('width', '0');
                    $('#loader_issue').fadeIn(400).html('<br><span class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Your Issue is being Processed...</span>');
                    $.ajax({
                        url: url_forming+'issues_attachment.php',
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


if(msg==77){
alert('Error 1: Please Create Projects First before creating an Issue');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Error 1: Please Create Projects First before creating an Issue.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				                
}

else if(msg== 1){
alert('Issue Successfully created');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:green;padding:10px;'>Issue Successfully created.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
                             
$('#title').val('');
$('#details').val('');
$('#status').val('');
$('#priority').val('');

//window.location="";
}

else if(msg== 9){
alert('File upload is empty');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>File upload is empty.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
}


else if(msg== 11){
alert('File Type not allowed');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>File Type not allowed</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
}

else if(msg== 12){
alert('File Size cannot be more than 5mb');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>File Size cannot be more than 5mb.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
}


else if(msg== 13){
alert('File Type not allowed.');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>File Type not allowed.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
}


else if(msg== 14){
alert('File Type not allowed..');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>File Type not allowed..</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
}

else{
alert('Issue cannot  be Created. Please Ensure there is Internet connections');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:red;padding:10px;'>Issue cannot  be Created. Please Ensure there is Internet connections.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);					
                       
}

                                
                             
                                

                        }
                    });
} // end if validate



}
//if process 2 ends here





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


  <h2 class="text-center"><span class='text_form'>Create Issues</span></h2>

<form id="" method="post">



 <div class="form-group">
 <label style={{padding:'6px', fontSize:'16px'}} >Select Project Name</label>
<select id='project_select' class='projectid col-sm-12 form-control'>
<option value='0' >Select Project</option>
</select>
<div id="project_select_empty"></div>
                        <div id="loader_pro1"></div>
 </div>


 <div class="form-group">
              <label  style={{padding:'6px', fontSize:'16px'}}>Issue Title/Summary</label>
              <input type="text" class="col-sm-12 form-control" id="title" name="title" placeholder="Enter Title" />

            </div>


<div class=" form-group">
<label>Issue Details</label>
<textarea  class="col-sm-12 form-control" id="details"  name="details" placeholder="Enter Details"></textarea>
</div>


 <div class="form-group">
              <label  style={{padding:'6px', fontSize:'16px'}}>Status</label>
              <select class="col-sm-12 form-control" id="status" name="status">
<option value=""> --Select Status--</option>
<option value="Open">Open</option>
<option value="Done">Done</option>
</select>

            </div>




 <div class="form-group">
              <label  style={{padding:'6px', fontSize:'16px'}}>Priority</label>
              <select class="col-sm-12 form-control" id="priority" name="priority">
<option value=""> --Select Priority--</option>
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>

            </div>



<div class="form-group">
<label style={{padding:'6px', fontSize:'16px'}}> Files Attachment (Optional)</label><br />
AllowedFile Types: (Images,Pdf,CSV,TXT,Ms-word,Powerpoints, excel,Audio etc.) 5MB Max.<br />
<input style={{background:'#c1c1c1'}} class="col-sm-12 form-control" type="file" id="file_content" name="file_content" accept="image/*" onchange="imagePreview(event)" />
 <img alt='' id="imageupload_preview"/>
</div>

 
                    <div class="form-group">
                           

                        <div id="loader_issue"></div>
                        <div id="result_issue"></div>
                    </div>
<br /><br />

                    <input title="Create Issue" type="button" id="issue_btn" class="login_css" value="Create Issue" />
                </form>
<br /><br /><br />






</div>
</div>





<div class='col-sm-2'></div>




{/*  end form   */}











      



       <br/>
        <br/>
            <br/>
        <br/>



        
      </div>

   
       )
  }



}
