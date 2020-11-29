import React, { Component } from 'react'
//import  './style.css';
import {NavLink, Link} from 'react-router-dom';

//import {Link} from 'react-router-dom';
//import ReactDOM from 'react-dom'
 
import $ from "jquery";
import jQuery from 'jquery';
import jquery from 'jquery';
//window.$ = window.jQuery=jquery;


export default class Dashboardnext extends Component {


// start  construct
constructor(props) {
  	super(props);

  this.state = {

  }


}
// end construct


//startcomponent MOUNT
componentDidMount() {

   this.fetchDashboard();

}

//end componentmount










// start call1

fetchDashboard() {



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








//starts issue post here
$(document).ready(function(){
           $('#issue_btn').click(function () {

                 
                    var title = $('#title').val();
                    var details = $('#details').val();
                    var status = $('#status').val();
                    var priority = $('#priority').val();
                    var projectid = $('.projectid').val();
  
                    var userid = localStorage.getItem('useridsessdata');
                    var teamid = localStorage.getItem('teamidsessdata');

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


if(msg== 1){
alert('Issue Successfully created');
$('#loader_issue').hide();
$('#result_issue').html("<div style='color:white;background:green;padding:10px;'>Issue Successfully created.</div>");
setTimeout(function(){ $('#result_issue').html(''); }, 5000);				
                             
$('#title').val('');
$('#details').val('');
$('#status').val('');
$('#priority').val('');


window.location="/dashboard";
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
                });
            });


// ends issues posts here






// loading starts here


/*

var post_url = window.location.href;
var urlData = new URL(post_url);
var owner_userid = urlData.searchParams.get("userid");
var teamid_issue = urlData.searchParams.get("teamid");
var issueid_issue = urlData.searchParams.get("issueid");
*/

// Get Id content from url
const issueid_issue = this.props.match.params.issueid;
//alert('i am id: ' +issueid_issue);
const issueid_next = issueid_issue;

const teamid_issue = this.props.match.params.teamid;
//alert('team is: ' +teamid_issue);
const teamid_next = teamid_issue;

const owner_userid = this.props.match.params.userid;
//alert('user is: ' +owner_userid);
const userid_next = owner_userid;





//start 1
$(document).ready(function(){
$('#loader_check').fadeIn(400).html('<br><div class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Checking if Issues has been created...</div>');
                  //var team_id = localStorage.getItem('teamidsessdata');
			$.ajax({
				url: url_forming+'issues_check1.php',
				type: 'post',
				data: {teamid_issue:teamid_issue, issueid_issue:issueid_issue, owner_userid:owner_userid},
				dataType: 'json',
				success: function(response){
			//alert(response);
if(response == 0){
$("#result_check").html("<div style='color:white;background:red;padding:10px;'>No Issues has been Created Yet</div>");   
$('#loader_check').hide();
}
$('#loader_check').hide();		           

		           
				}
			});
			
		});
//end 1







//update 1 for read view current issue starts
$(document).ready(function(){
//$('#loader_updates').fadeIn(400).html('<br><div class="loader_css" ><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Checking if Issues has been created...</div>');
                  //var team_id = localStorage.getItem('teamidsessdata');
			$.ajax({
				url: url_forming+'alerts_notify_updates1.php',
				type: 'post',
				data: {teamid_issue:teamid_issue, issueid_issue:issueid_issue},
				dataType: 'json',
				success: function(response){
			//alert(response);

//$('#loader_updates').hide();		           

		           
				}
			});
			
		});
//update 1 for view current issues ends







        var page_row_call =5;

var teamingIdsessdata = localStorage.getItem('teamidsessdata');

        $(document).ready(function(){

            loadIssues();

$("#loader_posts").fadeIn(400).html('<br><div style="color:black;background:white;padding:10px;">Please Wait. Loading Content <i class="fa fa-spinner fa-spin" style="font-size:20px"></i></div>');

        });

        function loadIssues(){
            var queryid = $("#form_queryid").val();
            var querytotal = $("#form_querytotal").val();

$("#loader_posts").fadeIn(400).html('<br><div style="color:black;background:white;padding:10px;">Please Wait. Loading Content <i class="fa fa-spinner fa-spin" style="font-size:20px"></i></div>');

            $.ajax({
				url:url_forming+'issues_load_post1.php',
                type:'post',
                data:{queryid:queryid,page_row_call:page_row_call, teamid_issue:teamid_issue, issueid_issue:issueid_issue, owner_userid:owner_userid},
                dataType:'json',
                success:function(response){

                    loadAllContent(response);

$("#loader_posts").hide();
//$("#result_posts1").html(response);
//setTimeout(function(){ $('#result_posts').html(''); }, 5000);	






                }
            });

        }

        function loadAllContent(data){

            var len1 = data.length;



            for(var i=0; i<len1; i++){
                if(i == 0){
                    var querytotal = data[i]['allcount'];
                    $("#form_querytotal").val(querytotal);
                }else{


                    var issueid = data[i]['issueid'];
                    var title = data[i]['title'];
                    var details = data[i]['details'];
                    var timer1 = data[i]['timer1'];
                    var timer2 = data[i]['timer2'];
                    var creator_name = data[i]['creator_name'];
                    var creator_photo = data[i]['creator_photo'];
                    var creator_userid = data[i]['creator_userid'];
                    var team_id = data[i]['team_id'];
                    var token1 = data[i]['token1'];
                    var token2 = data[i]['token2'];
                    var files = data[i]['files'];
                    var post_type = data[i]['post_type'];
                    var post_approve = data[i]['post_approve'];
                    var status = data[i]['status'];
                    var status_color = data[i]['status_color'];
                    var status_symbol = data[i]['status_symbol'];
                    var priority = data[i]['priority'];
                    var priority_color = data[i]['priority_color'];
                    var priority_symbol = data[i]['priority_symbol'];
                    var total_like = data[i]['total_like'];
                    var total_unlike = data[i]['total_unlike'];
                    var total_comment = data[i]['total_comment'];
                     var filename = data[i]['filename'];
var file_status = data[i]['file_status'];
var project_id = data[i]['project_id'];
var project_name = data[i]['project_name'];
        



if(file_status != ''){
var issue_file = "<b style='font-size:12px;text-align:left;'>Filename: </b>(" + filename + ")<br>" +

//"<div class='category_post'><img src='attachments/" + filename +"' title='View Files' style='border-radius:5%;color:white;margin-top:-10px;width:350px;max-width:350px;height:250px;max-height:250px;overflow:hidden'></div>" +
"<div><button class='download_css'><a target='_blank' href='https://qbtut.com/mondayserver/attachments/" + files +"' title='Click to Download' style='color:white;margin-top:-10px;'><span class='fa fa-download'></span>Download</a></button></div>" +
"<br />";
}else{

var issue_file = "<b>No Attachment</b>";
}








var rec = "<div  class='well'  id='contents_data' >" +  
        
"<div style='color:black;font-family:comic sansms;font-size:18px'><b>Project Name: </b>"+project_name+"</div><br>" +


"<img style='border-style: solid; border-width:3px; border-color:#3b5998; width:60px;height:60px; max-width:60px;max-height:60px;border-radius: 50%;' src='https://qbtut.com/mondayserver/uploads/" + creator_photo +"' />" +
"<div style='display:none;' align='center'>"+issueid+"<input type=text name='issue' id='issue' value='"+title+"'></div>" +
    
"<div style='margin-top:-70px'>"+           
"<p  style='background:"+ status_color +";color:white;border:none;padding:10px;border-radius:20%;' title='Status' class='pull-right'><span style='font-size:20px;color:white;' class='fa fa-tasks'></span> Status: "+ status +"</p>"+
"<p  style='background:"+ priority_color +";color:white;border:none;padding:10px;border-radius:20%;' title='Priority' class='pull-right'><span style='font-size:20px;color:white;' class='fa fa-level-up'></span> Priority: "+ priority +" </p><br><br><br>"+
"<button data-toggle='modal' data-target='#myModal_action'  title='Click to Perform Actions'  data-id=\""+ issueid +"\" data-creatorname=\""+ creator_name +"\"  data-creatoruserid=\""+ creator_userid +"\" data-creatorphoto=\""+ creator_photo +"\" data-teamid=\""+ team_id +"\" data-title=\""+ title +"\"  data-status=\""+ status +"\" data-priority=\""+ priority +"\"  class='btn_action pull-right action_css'><span style='font-size:20px;color:black;' class='fa fa-plus-square'></span> Actions </button><br>"+

"<a style='margin-top:-20px;' title='View Members Profile' href='/userprofile/"+ team_id +"/"+ creator_userid +"'  class='btn_action pull-right action_css'><span style='font-size:20px;color:black;' class='fa fa-user'></span> View Profile </a><br>"+

"<br><div class='pull-right'> " + issue_file + " </div>"+

"</div>"+


  "<div style='font-size:14px;color:black;'><b>Owner:</b> " + creator_name + "</div><br />" +
 "<div class='title_css'><b>Issue Title:</b> " + title + "</div>" +
  
"<div >   <b> Issues Details: </b>" + details + " </div><br />" +


  "<span><b> <span style='color:#3b5998' class='fa fa-calendar'></span>Time:</b> </span>" +
"<b><span data-livestamp='" + timer1 + "'></span></b>"+

"<span >( " + timer2 + ")</span><br /><br />" +




"<div class='row' style='background:#c1c1c1;'>"+

        "<span class='loaderLike_"+ issueid +"'></span>"+
"<span class='result-like_"+ issueid +"'></span>"+

" <span class='col-sm-4'><label title='Like' id='like_"+ issueid +"'  data-teamid=\""+ team_id +"\"  data-id=\""+ issueid +"\" data-creatorname=\""+ creator_name +"\"  data-creatoruserid=\""+ creator_userid +"\"  data-title=\""+ title +"\"  style='font-size:20px;color:#3b5998;cursor:pointer;' class='like_btn fa fa-thumbs-up'> <span style='font-size:14px'>Like<span></label>"+
"(<span id='likes_"+ issueid +"'> " +total_like + "</span>)</span>"+


                        "<span class='loaderUnLike_"+ issueid +"'></span>"+
"<span class='result-unlike_"+ issueid +"'></span>"+
"<span class='col-sm-4'><label title='Un Like' id='unlike_"+ issueid +"' data-teamid=\""+ team_id +"\" data-id=\""+ issueid +"\" data-creatorname=\""+ creator_name +"\"  data-creatoruserid=\""+ creator_userid +"\"  data-title=\""+ title +"\"  style='font-size:20px;color:#3b5998;cursor:pointer;' class='unlike_btn fa fa-thumbs-down'> <span style='font-size:14px'>UnLike</span></label>"+
"(<span id='unlikes_"+ issueid +"'> " +total_unlike + "</span>)</span>"+



" <span class='col-sm-4'><label><span title='Comments/Reply'  style='font-size:20px;color:#3b5998;cursor:pointer;' class='fa fa-comments'> <span style='font-size:14px'>Reply</span></span></label>"+
"(<span id='comment_"+ issueid +"'> " + total_comment + "</span>)</span>"+



//"<span style='cursor:pointer;color:#3b5998' data-toggle='modal' data-target='#myModal_comment'  title='Click to Comments or Reply'  data-id=\""+ issueid +"\" data-creatorname=\""+ creator_name +"\"  data-creatoruserid=\""+ creator_userid +"\" data-creatorphoto=\""+ creator_photo +"\" data-teamid=\""+ team_id +"\" data-title=\""+ title +"\"  data-status=\""+ status +"\" data-priority=\""+ priority +"\"  class='btn_action_comment pull-right col-sm-3'><span style='font-size:20px;color:color:#3b5998;cursor:pointer' class='fa fa-comments-o'></span>Reply on Modal </span><br>"+


//"<button data-toggle='modal' data-target='#myModal_comment'  title='Click to Comments or Reply'  data-id=\""+ issueid +"\" data-creatorname=\""+ creator_name +"\"  data-creatoruserid=\""+ creator_userid +"\" data-creatorphoto=\""+ creator_photo +"\" data-teamid=\""+ team_id +"\" data-title=\""+ title +"\"  data-status=\""+ status +"\" data-priority=\""+ priority +"\"  class='btn_action_comment pull-right action_css col-sm-3'><span style='font-size:20px;color:black;cursor:pointer' class='fa fa-comments-o'></span>Reply on Modal </button><br>"+


"</div>"+






"<div style='background:#eeeeee'>" +
"</div></div>";

 $("#res_issues").append(rec);

$("#loader_posts").hide();

                }
            }
        }



// loading issues ends here







//load Projects starts here


$(document).ready(function(){

var teamid =localStorage.getItem('teamidsessdata');
$('#loader_pc').fadeIn(400).html('<br><div class="well" style="color:white;padding:10px;background:#3b5998"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Your Project is being Loaded.</div>');

$.ajax({
        url: url_forming+'project_call.php',
        type: 'get',
        dataType: 'JSON',
        data: {teamid:teamid},
        crossDomain: true,
        cache:false,
        success: function(response){


//alert(response);
if(response){
$('#loader_pc').hide();
}

if(!response){
$('#loader_pc').hide();

$("#result_pc").append("<div style='color:white;background:red;padding:10px;'>No Project Name has added by Your Team Yet.</div>");
$('#loader_pc').hide();




}

//$('#loader_pc').hide();

            var record_length = response.length;
            for(var i=0; i<record_length; i++){
              
                var id = response[i].id;
                var project_id = response[i].id;
                var project_name = response[i].project_name;
                var details = response[i].details;
                var timer1 = response[i].timer1;
                var timer2 = response[i].timer2;
                var creator_name = response[i].creator_name;
                var creator_photo = response[i].creator_photo;
                var creator_userid = response[i].creator_userid;
                var token1 = response[i].token1;
                var token2 = response[i].token2;
                var team_id = response[i].team_id;

            


var m_rec = "<div id='projectRecords' class='project_css'>" +
"<span style=''><b>Project Name: </b> " + project_name + "</span><br />" +
"<span style=''><b>Details: </b>" + details + "</span><br>" +
  "<span><b> <span style='color:#3b5998' class='fa fa-calendar'></span>Time:</b> </span>" +
"<b><span data-livestamp='" + timer1 + "'></span></b><br>"+

"<a  title='Access Projects Issues' href='/projectissue/"+ team_id +"/"+ project_id +"'  class='btn_action pull-right proj_css'><span style='font-size:16px;color:black;' class='fa fa-globe'></span> Access Projects Issues </a><br>"+


//"<div class='project-del_"+ id +"'></div>"+
//"<div class='result-projectdel_"+ id +"'></div>"+
//"<button title='Delete Project' +" data-id="+ creator_userid +"  data-teamid="+ team_id +" class='pull-right '>Delete Project</button><BR>"+

                   "<br><br></div><p></p>";

                $("#result_pc").append(m_rec);

//$('.btn_accept_show').html("<button data-id="+ id +"  class=''>delete</button>");


            }

$('#loader_pc').hide();
        }
    });
});


// load Projects ends here










//load Team Members a starts here

$(document).ready(function(){

var teamid =localStorage.getItem('teamidsessdata');
$('#loader_members').fadeIn(400).html('<br><div class="well" style="color:white;padding:10px;background:#3b5998"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>  &nbsp;Please Wait, Your Team Members is being Loaded.</div>');

$.ajax({
        url: url_forming+'members_call.php',
        type: 'get',
        dataType: 'JSON',
        data: {teamid:teamid},
        crossDomain: true,
        cache:false,
        success: function(resp){


//alert(resp);
if(resp){
$('#loader_members').hide();
}

if(!resp){
$('#loader_members').hide();

$("#result_members").append("<div style='color:white;background:red;padding:10px;'>Your Team Yet has no Members Yet.</div>");
$('#loader_members').hide();




}

//$('#loader_members').hide();

            var rec_length = resp.length;
            for(var i=0; i<rec_length; i++){
              
                var id = resp[i].id;
                var userid = resp[i].id;
                var fullname = resp[i].fullname;
                var email = resp[i].email;
                var timer1 = resp[i].timer1;
                var photo = resp[i].photo;
                var token1 = resp[i].token1;
                var token2 = resp[i].token2;
                var team_id = resp[i].team_id;

            


var m_rec1 = "<div id='memberRecords' class='project_css'>" +
"<img style='border-style: solid; border-width:3px; border-color:#ec5574; width:40px;height:40px; max-width:40px;max-height:40px;border-radius: 50%;' src='https://qbtut.com/mondayserver/uploads/" + photo +"' />" +
"<span style=''><b> Name: </b> " + fullname + "</span><br />" +
"<span style=''><b>Email: </b>" + email + "</span><br>" +
  "<span><b> <span style='color:#3b5998' class='fa fa-calendar'></span>Time:</b> </span>" +
"<b><span data-livestamp='" + timer1 + "'></span></b><br>"+

"<a  title='View Users Profile' href='/userprofile/"+ team_id +"/"+ userid +"' class='btn_action pull-right proj_css'><span style='font-size:16px;color:black;' class='fa fa-user'></span> Users Profile </a><br>"+


//"<div class='project-del_"+ id +"'></div>"+
//"<div class='result-projectdel_"+ id +"'></div>"+
//"<button title='Delete Project' +" data-id="+ creator_userid +"  data-teamid="+ team_id +" class='pull-right '>Delete Member</button><BR>"+

                   "<br><br></div><p></p>";

                $("#result_members").append(m_rec1);

//$('.btn_accept_show').html("<button data-id="+ id +"  class=''>delete</button>");


            }

$('#loader_members').hide();
        }
    });
});


// load Members ends here



/*
// Read More Starts Here
            $(document).ready(function() {
//var issue_id = 31;
              
$(document).on( 'click', '.readmore-msg-btn', function(){ 
var issue_id = $(this).data('id');
                    $("#issueDetailsHide_"+issue_id).show("slow");
                    
                });


$(document).on( 'click', '.readmore-msg-hide-btn', function(){ 
var issue_id = $(this).data('id');
$("#issueDetailsHide_"+issue_id).show("slow");
                    $("#issueDetailsHide_"+issue_id).hide("slow");
                    //$(this).hide();
                });

            });

// Read More ends Here



//hide issue details on page load
        $(document).ready(function(){
           // $(".issueDetailsHide").hide();
            $("[id^='issueDetailsHide_']").hide("");
        });

*/



// loading ends here





// like starts here
        $(document).ready(function(){
$(document).on( 'click', '.like_btn', function(){ 
           

var issueid = $(this).data('id');
var creator_name = $(this).data('creatorname');
var creator_userid = $(this).data('creatoruserid');
var teamid = $(this).data('teamid');
var title = $(this).data('title');


var id = this.id;

var explode_postid = id.split("_");
var like_first = explode_postid[0];
var postid_second = explode_postid[1]; 
var post_id = postid_second;
var postid = postid_second;


// start  main if

if(like_first == 'like'){

var like_type = 1;

// start confirm
 if(window.confirm("Are you sure you want to Like this Post?: ")){

$(".loaderLike_"+postid).fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait, Like is being Published...</div>');
var datasend = {'post_id': post_id,'like_type': like_type, 'creator_userid': creator_userid, 'teamid': teamid, title: title};
$.ajax({
			type:'POST',
			url:url_forming+'post_lu.php',
			data:datasend,
                        dataType: 'json',
                        crossDomain: true,
			cache:false,
			success:function(msg){
var likes = msg['likes'];
                var unlikes = msg['unlikes'];
                var comment = msg['comment'];
               
               alert('cccc: '+comment);
                $("#likes_"+post_id).text(likes);    
                $("#unlikes_"+post_id).text(unlikes);
                 $("#comment_"+post_id).text(comment);
              
               
alert('Like Sent');
$(".loaderLike_"+postid).hide();
$(".result-like_"+postid).html("<div style='color:white;background:green;padding:10px;'>Like Sent Successfully</div>");
setTimeout(function(){ $(".result-like_"+postid).html(''); }, 5000);



}
			
		});
		
		


}
// end confirm


}
//end main if

})
});

// like ends here





// unlike starts here
        $(document).ready(function(){
$(document).on( 'click', '.unlike_btn', function(){ 
           

var issueid = $(this).data('id');
var creator_name = $(this).data('creatorname');
var creator_userid = $(this).data('creatoruserid');
var teamid = $(this).data('teamid');
var title = $(this).data('title');

var id = this.id;

var explode_postid = id.split("_");
var like_first = explode_postid[0];
var postid_second = explode_postid[1]; 
var post_id = postid_second;
var postid = postid_second;



var like_type = 0;



// start main if
if(like_first == 'unlike'){

// start confirm
 if(window.confirm("Are you sure you want to UnLike this Post: ")){

$(".loaderUnLike_"+postid).fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait, UnLike is being Published...</div>');
var datasend = {'post_id': post_id,'like_type': like_type, 'creator_userid': creator_userid, 'teamid': teamid, title: title};
$.ajax({
			type:'POST',
			url:url_forming+'post_lu.php',
			data:datasend,
                        dataType: 'json',
                        crossDomain: true,
			cache:false,
			success:function(msg){
var likes = msg['likes'];
                var unlikes = msg['unlikes'];
                var comment = msg['comment'];
               
               
                $("#likes_"+post_id).text(likes);    
                $("#unlikes_"+post_id).text(unlikes);
                 $("#comment_"+post_id).text(comment);
              
               
alert('unLike Sent');
$(".loaderUnLike_"+postid).hide();
$(".result-unlike_"+postid).html("<div style='color:white;background:green;padding:10px;'>UnLike Sent Successfully</div>");
setTimeout(function(){ $(".result-unlike_"+postid).html(''); }, 5000);



}
			
		});
		
		


}
// end confirm

}
//end main if


})
});

// unlike ends here





// issue post notification starts here

//start 1

$(document).ready(function(){

var userid_sess_data = localStorage.getItem('useridsessdata');
var teamingId_sess_data = localStorage.getItem('teamidsessdata');


$("#loader-notify_alert_posts").fadeIn(400).html('<br><div style="color:black;background:#c1c1c1;padding:10px;"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i></div>');
var datasend = {userid_sess_data:userid_sess_data, teamingId_sess_data:teamingId_sess_data};

//alert(userid_sess_data);
	
		$.ajax({
			
			type:'POST',
			url:url_forming+'notify_alert_posts.php',
			data:datasend,
                        crossDomain: true,
			cache:false,
			success:function(msg){

//alert(msg);

$("#loader-notify_alert_posts").hide();
$("#result-notify_alert_posts").html(msg);
//setTimeout(function(){ $('#result-notify_alert_posts').html(''); }, 5000);	


			
	
}
			
		});
		
		

});

// end 1





// issues post notificatio ends here

// start 2


$(document).ready(function(){


var userid_sess_data = localStorage.getItem('useridsessdata');
var teamingId_sess_data = localStorage.getItem('teamidsessdata');



if(userid_sess_data ==''){
alert('something is wrong with user Id');
}


else{


$("#loader-load-notify-post").fadeIn(400).html('<br><div style="color:black;background:#c1c1c1;padding:10px;"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait,Loading Your Notification Alerts...</div>');
var datasend = {userid_sess_data:userid_sess_data, teamingId_sess_data:teamingId_sess_data};


	
		$.ajax({
			
			type:'POST',
			url:url_forming+'notification_post_load.php',
			data:datasend,
                        crossDomain: true,
			cache:false,
			success:function(msg){

$("#loader-load-notify-post").hide();
$("#result-load-notify-post").html(msg);
//setTimeout(function(){ $('#result-load-notify-post(''); }, 5000);				

//location.reload();	
}
			
		});
		
		}


});



// end 2





// start 3


$(document).ready(function(){

$('.refresh_alert_btn').click(function(){
var userid_sess_data = localStorage.getItem('useridsessdata');
var teamingId_sess_data = localStorage.getItem('teamidsessdata');



if(userid_sess_data ==''){
alert('something is wrong with user Id');
}


else{


$("#loader-load-notify-post").fadeIn(400).html('<br><div style="color:black;background:#c1c1c1;padding:10px;"><i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait,Loading Your Notification Alerts...</div>');
var datasend = {userid_sess_data:userid_sess_data, teamingId_sess_data:teamingId_sess_data};


	
		$.ajax({
			
			type:'POST',
			url:url_forming+'notification_post_load.php',
			data:datasend,
                        crossDomain: true,
			cache:false,
			success:function(msg){

$("#loader-load-notify-post").hide();
$("#result-load-notify-post").html(msg);
//setTimeout(function(){ $('#result-load-notify-post(''); }, 5000);				

//location.reload();	
}
			
		});
		
		}


});
});



// end 3




//start copying Team ID


$(document).ready(function(){
$('.copy_btn').click(function(){

//var copyData =  $(this).data('copyteamid');
//var copyData =  $('#myd_tmID_sess_send').val();

var teamingId_sess_data = localStorage.getItem('teamidsessdata');
var copyData = teamingId_sess_data;

    var $cp = $("<input>");
    $("body").append($cp);
    $cp.val(copyData).select();
    document.execCommand("copy");
    $cp.remove();

alert('Team Invitation ID Copied Successfully');

});
});




//END copying Team ID





// start issues updates

$(document).ready(function(){
//$('.btn_action').click(function(){
$(document).on( 'click', '.btn_action', function(){ 

var issueid = $(this).data('id');
var title = $(this).data('title');
var teamid = $(this).data('teamid');
var ownerid = $(this).data('creatoruserid');
var status = $(this).data('status');
var priority = $(this).data('priority');




$('#issueid11').html(issueid);
$('#title11').html(title);
$('#status11').html(status);
$('#priority11').html(priority);



//$('#issueid_val').val(issueid).value;
//$('#teamid_val').val(teamid).value;
//$('#ownerid_val').val(ownerid).value;



// start data updates

var userid_session = localStorage.getItem('useridsessdata');

$('#status_btn').click(function(){

var status = $('#status_post').val();

if(status==""){
alert('Status cannot be empty');
}


else{

$("#loader_status").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Status Updates in Progress...</div>');
var datasend = {issueid:issueid, teamid:teamid, userid:ownerid, status:status, title: title, userid_session: userid_session};
		
		$.ajax({
			
			type:'POST',
			url:url_forming+'issues_updates_status.php',
			data:datasend,
                        crossDomain: true,
                        dataType: 'json',
			cache:false,
			success:function(msg){

                        var status_res = msg['status'];
                        var messaging = msg['messaging'];
                        var messaging1 = msg['messaging1'];
                          

if(messaging1 =='no'){
alert('Only Issue owner can change the Issues status');
$("#result_status").html("<div style='color:white;background:red;padding:10px;'>Only Issue owner can change the Issues status</div>");   
$('#loader_status').hide();
setTimeout(function(){ $("#result_status").html(''); }, 5000);

}

if(messaging =='ok'){
alert('Issues status successfull updated');
$("#result_status").html("<div style='color:white;background:green;padding:10px;'> Issues status successfull updated</div>");   
$('#loader_status').hide();

$("#status11").text(status_res);
setTimeout(function(){ $("#result_status").html(''); }, 5000);
$('#status_post').val('');

}else{

alert('Issues status cannot be updated');
$("#result_status").html("<div style='color:white;background:red;padding:10px;'>Issues status cannot be updated</div>");   
$('#loader_status').hide();
setTimeout(function(){ $("#result_status").html(''); }, 5000);

}   
                         
			
			
					
			}
			
		});
		
		}
		
	})



//end issue status updates







// start issue priority updates

var userid_session1 = localStorage.getItem('useridsessdata');

$('#priority_btn').click(function(){

var priority = $('#priority_post').val();

if(priority==""){
alert('priority cannot be empty');
}


else{

$("#loader_priority").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Priority Updates in Progress...</div>');
var datasend = {issueid:issueid, teamid:teamid, userid:ownerid, priority:priority, title: title, userid_session: userid_session1};
		
		$.ajax({
			
			type:'POST',
			url:url_forming+'issues_updates_priority.php',
			data:datasend,
                        crossDomain: true,
                        dataType: 'json',
			cache:false,
			success:function(msg){

                        var priority_res = msg['priority'];
                        var messaging = msg['messaging'];
                        var messaging1 = msg['messaging1'];
                          

if(messaging1 =='no'){
alert('Only Issue owner can change the Issues priority');
$("#result_priority").html("<div style='color:white;background:red;padding:10px;'>Only Issue owner can change the Issues priority</div>");   
$('#loader_priority').hide();
setTimeout(function(){ $("#result_priority").html(''); }, 5000);

}

if(messaging =='ok'){
alert('Issues priority successfull updated');
$("#result_priority").html("<div style='color:white;background:green;padding:10px;'> Issues priority successfull updated</div>");   
$('#loader_priority').hide();

$("#priority11").text(priority_res);
setTimeout(function(){ $("#result_priority").html(''); }, 5000);
$('#status_priority').val('');

}else{

alert('Issues priority cannot be updated');
$("#result_priority").html("<div style='color:white;background:red;padding:10px;'>Issues priority cannot be updated</div>");   
$('#loader_priority').hide();
setTimeout(function(){ $("#result_priority").html(''); }, 5000);

}   
                         
			
			
					
			}
			
		});
		
		}
		
	})



//end issue priority updates



})
});



// end data updates





//start all issues calendar
$(document).ready(function(){
var teamingId_sess_data1 = localStorage.getItem('teamidsessdata');
allIssuesCalendar('https://qbtut.com/mondayserver/calendar_allIssues.php?teamid='+teamingId_sess_data1);
			$('body').delegate('.calendar_calling1', 'click', function(e){
				e.preventDefault();
				allIssuesCalendar($(this).attr('href'));
			});
		});

function allIssuesCalendar(url1a) {
$("#loader_allissues").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait...Loading All Issues on Calendar</div>');

var test =1;
var datasend = {test:test};
$.ajax({
			
			type:'GET',
			url:url1a,
			data:datasend,
                        crossDomain: true,
                        dataType: 'json',
			cache:false,
			success:function(data){
$('.calendar_allIssues').html(data);
$("#loader_allissues").hide();
                        
                          
			}
});
/*
$.get(url1a,function(data){
$('.calendar_allIssues').html(data);
$("#loader_allissues").hide();

			});
			*/
			
			
			
			
}




$(document).ready(function(){
$('#refresh1').click(function(){
var teamingId_sess_data1 = localStorage.getItem('teamidsessdata');

allIssuesCalendar('https://qbtut.com/mondayserver/calendar_allIssues.php?teamid='+teamingId_sess_data1);
			$('body').delegate('.calendar_calling1', 'click', function(e){
				e.preventDefault();
				allIssuesCalendar($(this).attr('href'));
			});
		});
});


function allIssuesCalendar(url1b) {
$("#loader_allissues").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait...Loading All Issues on Calendar</div>');
$.get(url1b,function(data){
$('.calendar_allIssues').html(data);
$("#loader_allissues").hide();

			});
}


// end all issues calendar






//start open issues calendar
//$.noConflict();
$(document).ready(function(){
// $.noConflict(true);

var teamingId_sess_data1 = localStorage.getItem('teamidsessdata');

openIssuesCalendar('https://qbtut.com/mondayserver/calendar_openIssues.php?teamid='+teamingId_sess_data1);
			$('body').delegate('.calendar_calling2', 'click', function(e){
				e.preventDefault();
				openIssuesCalendar($(this).attr('href'));
			});
		});

function openIssuesCalendar(url2a) {
$("#loader_openissues").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait...Loading Open Issues on Calendar</div>');
$.get(url2a,function(data){
$('.calendar_openIssues').html(data);
$("#loader_openissues").hide();

			});
}



$(document).ready(function(){
$('#refresh2').click(function(){
var teamingId_sess_data1 = localStorage.getItem('teamidsessdata');

openIssuesCalendar('https://qbtut.com/mondayserver/calendar_openIssues.php?teamid='+teamingId_sess_data1);
			$('body').delegate('.calendar_calling2', 'click', function(e){
				e.preventDefault();
				openIssuesCalendar($(this).attr('href'));
			});
		});
});


function openIssuesCalendar(url2b) {
$("#loader_openissues").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait...Loading Open Issues on Calendar</div>');
$.get(url2b,function(data){
$('.calendar_openIssues').html(data);
$("#loader_openissues").hide();

			});
}


// end open issues calendar





//start done close issues calendar
//$.noConflict();
$(document).ready(function(){
// $.noConflict(true);

var teamingId_sess_data1 = localStorage.getItem('teamidsessdata');

doneIssuesCalendar('https://qbtut.com/mondayserver/calendar_doneIssues.php?teamid='+teamingId_sess_data1);
			$('body').delegate('.calendar_calling3', 'click', function(e){
				e.preventDefault();
				doneIssuesCalendar($(this).attr('href'));
			});
		});

function doneIssuesCalendar(url3a) {
$("#loader_doneissues").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait...Loading Done Issues on Calendar</div>');
$.get(url3a,function(data){
$('.calendar_doneIssues').html(data);
$("#loader_doneissues").hide();

			});
}



$(document).ready(function(){
$('#refresh3').click(function(){
var teamingId_sess_data1 = localStorage.getItem('teamidsessdata');

doneIssuesCalendar('https://qbtut.com/mondayserver/calendar_doneIssues.php?teamid='+teamingId_sess_data1);
			$('body').delegate('.calendar_calling3', 'click', function(e){
				e.preventDefault();
				doneIssuesCalendar($(this).attr('href'));
			});
		});
});


function doneIssuesCalendar(url3b) {
$("#loader_doneissues").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait...Loading Done Issues on Calendar</div>');
$.get(url3b,function(data){
$('.calendar_doneIssues').html(data);
$("#loader_doneissues").hide();

			});
}


// end done close issues calendar







// bootstrap dropdown starts
$(document).ready(function(){
$('.dropdown-menu').click(function(e){

// stopt all bootstrap drop down menu from closing on click inside
//$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});
});

// bootstrap  dropdown ends









// start commenting


$(document).ready(function(){
$(".comment").click(function(){

/*
var post_urlR = window.location.href;
var urlDataR  = new URL(post_urlR);
var owner_useridR  = urlDataR.searchParams.get("userid");
var teamid_issueR  = urlDataR.searchParams.get("teamid");
var issueid_issueR  = urlDataR.searchParams.get("issueid");
*/


// Get Id content from url
const issueid_issueR = issueid_next;
const teamid_issueR = teamid_next;
const owner_useridR = userid_next;

var issueid1 = issueid_issueR;
var teamid1  = teamid_issueR;



var postid = issueid1; 
var comdesc = $('#comdesc').val();
var useridsession  = owner_useridR;
//var userid_session = localStorage.getItem('useridsessdata');
/*
alert('issueid:' +issueid1);
alert('teammm:' +teamid1);
alert('owner:' +useridsession);
*/

if(comdesc == ''){
alert('comment cannot be empty');
return false;
}
$(".loader_comments").fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"> <i class="fa fa-spinner fa-spin" style="font-size:20px"></i>&nbsp;Please Wait, Your Reply is being Published..</div>');
        $.ajax({
            url: url_forming+'comment_next.php',
            type: 'post',
            dataType: 'json',
            data: {comdesc:comdesc,issueid1:issueid1, teamid1:teamid1, useridsession:useridsession},          
            crossDomain: true,
	    cache:false,
            success: function(data){


                var comment = data['comment'];
                var comdesc = data['comdesc'];
                var comment_username = data['comment_username'];
                 var comment_fullname = data['comment_fullname'];
 var comment_photo = data['comment_photo'];
 var comment_time2 = data['timer2'];
var comment_time1 = data['timer1'];
var comment_userid = data['comment_userid'];
var comment_id = data['comment_id'];




              $("#comment_"+postid).text(comment); 

   // setting comment
               //$("#comdesc_"+postid).prepend(comdesc);    // setting comment
              // $("#commentusername_"+postid).prepend(comment_username);    // setting comment


  var comment_json = "<div style='background:#f1f1f1;color:black'>" +

"<div class=''>"+   


"<div class='pull-right' ><button class='action_css'>"+
"<a title='Click to access users Profile page'  Disabled title='Click to access users page'>"+
"<span style='font-size:20px;color:#3b5998;' class='fa fa-user'></span> View Your Profile</a></button></div>"+


"<img style='border-style: solid; border-width:3px; border-color:#3b5998; width:60px;height:60px; max-width:60px;max-height:60px;border-radius: 50%;' src='https://qbtut.com/mondayserver/uploads/" + comment_photo +"' /><br>" +
              
 //"<img style='border-style: solid; border-width:3px; border-color:#3b5998; width:60px;height:60px; max-width:60px;max-height:60px;border-radius: 50%;' src=" + comment_photo +" /><br>" +
"<div><b style='color:#3b5998;font-size:18px;' >Name:" + comment_fullname + "</b><br></div>"+
//

//"<div class='loader-request_'+postid></div><div class='result-request_'+postid></div>"+

//"<button class='post_css1'><a title=' Send Friends Request' style='color:black;' id='request_"+postid+"_"+comment_userid+"' class='send_request'><span style='font-size:20px;color:#3b5998;' class='fa fa-comments-o'></span> Send Yourself Request Disabled</a></button></div>"+
   "<b style='font-size:12px;text-align:left;'>Comment: </b>" + comdesc + "<br>" +
  "<span><b> <span class='fa fa-calendar'></span>Time:</b></span>" +
"<span data-livestamp='" + comment_time1 + "'></span> (" + comment_time2 + ")</span>"+



                    "</div><p></p>";

                
//$("#commentsubmissionResult_"+issueid).append(comment_json);
//$("#commentsubmissionResult").append(comment_json);

$("#commentsubmissionResult").append(comment_json);


$(".loader_comments").hide();

$('#comdesc').val('');
//$('#comdesc'+postid).val('');

alert('comments success');



            }
        });

  });

});

// end commenting





// reload page starts

$(document).ready(function(){
	$(document).on( 'click', '.reloadPageNext', function(){ 
window.location.reload();
	})

});
//reload page ends





//start loading Reply




        var page_row_call_reply =5;
//var teamingIdsessdata = localStorage.getItem('teamidsessdata');
//var issueidPost = localStorage.getItem('issueID101');



/*
var post_urlRc = window.location.href;
var urlDataRc  = new URL(post_urlRc);
var owner_useridRc  = urlDataRc.searchParams.get("userid");
var teamingIdsessdata  = urlDataRc.searchParams.get("teamid");
var issueidPost  = urlDataRc.searchParams.get("issueid");
*/


var owner_useridRc  = userid_next;
var teamingIdsessdata  = teamid_next;
var issueidPost  = issueid_next;


//alert(teamingIdsessdata);
//alert(issueidPost);

        $(document).ready(function(){

            loadIssues_reply();

$("#loader_posts_reply").fadeIn(400).html('<br><div style="color:black;background:white;padding:10px;">Please Wait. Loading Reply <i class="fa fa-spinner fa-spin" style="font-size:20px"></i></div>');


            $("#loadmore_btn_reply").click(function(){



  var issue_reply = $("#issue_reply").val();



                var queryid_reply = Number($("#form_queryid_reply").val());
                var querytotal_reply = Number($("#form_querytotal_reply").val());
                queryid_reply += page_row_call_reply;
                if(queryid_reply <= querytotal_reply){
               
                    $("#form_queryid_reply").val(queryid_reply);
                    loadIssues_reply();
                }

                if(queryid_reply >= querytotal_reply){
               
                   alert('No More Reply or Comments to Load');
$("#nomore_content_check_reply").html("<div style='background:purple;color:white;padding:10px;'>No More Reply or comment to Load <br> <center><button style='background:#3b5998;border:none;color:white;padding:10px;cursor:pointer' title='Refresh Page' class='reloadPageNext'>Refresh Page</button></center> </div>");   
$('#loader_post_reply').hide();
                }


            });
        });

        function loadIssues_reply(){
            var queryid_reply = $("#form_queryid_reply").val();
            var querytotal_reply = $("#form_querytotal_reply").val();

$("#loader_posts_reply").fadeIn(400).html('<br><div style="color:black;background:white;padding:10px;">Please Wait. Loading Reply Comments <i class="fa fa-spinner fa-spin" style="font-size:20px"></i></div>');

            $.ajax({
                url:url_forming+'issues_load_reply_next.php',
                type:'post',
                data:{queryid_reply:queryid_reply,page_row_call_reply:page_row_call_reply, teamingIdsessdata:teamingIdsessdata, issueidPost:issueidPost},
                dataType:'json',
                success:function(response_reply){

                    loadAllContent_reply(response_reply);

$("#loader_posts_reply").hide();
//$("#result_posts1_reply").html(response_reply);
//setTimeout(function(){ $('#result_posts_reply').html(''); }, 5000);	


                }
            });

        }

        function loadAllContent_reply(data_reply){

            var len1_reply = data_reply.length;


            for(var i=0; i<len1_reply; i++){
                if(i == 0){
                    var querytotal_reply = data_reply[i]['allcount'];
                    $("#form_querytotal_reply").val(querytotal_reply);
                }else{



                    var issueid = data_reply[i]['issueid'];
                    var commentid = data_reply[i]['commentid'];
                    var type = data_reply[i]['type'];
                    var comment = data_reply[i]['comment'];
                    var timer1 = data_reply[i]['timer1'];
                    var timer2 = data_reply[i]['timer2'];
                    var userid = data_reply[i]['userid'];
                    var fullname = data_reply[i]['fullname'];
                    var photo = data_reply[i]['photo'];
                    var team_id = data_reply[i]['team_id'];
                    


 var rec_reply = "<div style='background:#f1f1f1;color:black'>" +

"<div class=''>"+   


"<div class='pull-right' ><button class='action_css'>"+
"<a title='Click to access users Profile page'  href='/userprofile/"+ team_id +"/"+ userid +"' title='Click to access users page'>"+
"<span style='font-size:20px;color:#3b5998;' class='fa fa-user'></span> View User Profile</a></button></div>"+


"<img style='border-style: solid; border-width:3px; border-color:#3b5998; width:60px;height:60px; max-width:60px;max-height:60px;border-radius: 50%;' src='https://qbtut.com/mondayserver/uploads/" + photo +"' /><br>" +
              
 //"<img style='border-style: solid; border-width:3px; border-color:#3b5998; width:60px;height:60px; max-width:60px;max-height:60px;border-radius: 50%;' src=" + photo +" /><br>" +
"<div><b style='color:#3b5998;font-size:18px;' >Name:" + fullname + "</b><br></div>"+
//

//"<div class='loader-request_'+postid></div><div class='result-request_'+postid></div>"+

//"<button class='post_css1'><a title=' Send Friends Request' style='color:black;' id='request_"+postid+"_"+comment_userid+"' class='send_request'><span style='font-size:20px;color:#3b5998;' class='fa fa-comments-o'></span> Send Yourself Request Disabled</a></button></div>"+
   "<b style='font-size:12px;text-align:left;'>Comment: </b>" + comment + "<br>" +
  "<span><b> <span class='fa fa-calendar'></span>Time:</b></span>" +
"<span data-livestamp='" + timer1 + "'></span> (" + timer2 + ")</span>"+



                    "</div><p></p>";





 $("#res_issues_reply").append(rec_reply);

$("#loader_posts_reply").hide();

                }
            }
        }




// end loading reply






// start search engine

$(document).ready(function(){
$(".search_btn").keyup(function() {
	
		
var search_data = $(this).val();
//var search_data = $('#search_data').val();
var ss= 'ok';

if(search_data==""){
//alert('Search Content cannot be empty');	
		}
else{
$("#loader_search").fadeIn(400).html('<br><div style="color:black;background:white;padding:10px;">Please Wait. Issues is being Searched <i class="fa fa-spinner fa-spin" style="font-size:20px"></i></div>');
var datasend = "search_data="+ search_data + "&ss=" + ss;
		
		$.ajax({
			
			type:'POST',
			url:url_forming+'search.php',
			data:datasend,
                        crossDomain: true,
			cache:false,
			success:function(msg){
	                       //$('#search_data').val('');
				
                                $("#result_search").html(msg);
				$('#alerts_search').delay(5000).fadeOut('slow');
                                $('#loader_search').hide();			
			}
			
		});
		
		}
		
	})
					
});


// end search engine



//set members teamid starts 
//const teamingId_sess_issues = localStorage.getItem('teamidsessdata');

const teamingId_sess_issues = teamid_next;
this.setState({members_teamid: teamingId_sess_issues});



const users_teamid = localStorage.getItem('teamidsessdata');
const users_userid   = localStorage.getItem('useridsessdata');

this.setState({users_teamid: users_teamid});
this.setState({users_userid: users_userid});


// set members teamid ends


}

// end call1



  render() {
    return (






      <div>






{/*  start left column all   */}


    <div class="left-column-all">

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
<span style={{display: 'none'}}><span class="myd_fullname_sess"></span> (<span class="myd_rank_sess"></span>)</span>

<span ><NavLink to="/logout" style={{color: 'black'}} class='logout_css img-circle' title='Logout'>Logout</NavLink></span>
       

<li data-toggle="modal" data-target="#myModal_search" style={{cursor:'pointer'}} class="navgate"><i style={{fontSize:'20px', color:'#3b5998'}} class='fa fa-search'></i> Search</li>
       
	    <li ><NavLink to="/dashboard" style={{color: 'black'}} class='dboard_css img-circle' title='Dashboard'>Dashboard</NavLink></li>
        <li ><NavLink to="/createproject" style={{color: 'black'}} title='Add Project'>Add Project</NavLink></li>
        <li ><NavLink to="/createissue" style={{color: 'black'}} title='Add Issues'>Add Issue</NavLink></li>

{/* start post isuues comments like etc Call */}

<li>
<span style={{color:'white'}} class="dropdown fa fa-bell">
  <a  style={{color:'white', fontSize:'14px',cursor: 'pointer'}}  title='Posts, Comments and Like Alerts' class="btn1 btn-default1 dropdown-toggle"  data-toggle="dropdown">
  <span class="notify_count"><span id="loader-notify_alert_posts"></span><span id="result-notify_alert_posts"></span></span>
</a>

<ul className="dropdown-menu div_overflow">
<h4 style={{color:'blue'}}>Issues, Comments/Replys and Like & UnLike Alerts</h4>

<button class="refresh_alert_btn myform_btn_css">Refresh Alerts</button>




<div id="loader-load-notify-post"></div>
<div id="result-load-notify-post"></div>



<p></p>

</ul></span>
&nbsp;&nbsp;
</li>


{/* end post issues comments like etc Call */}



      </ul>
    </div>
  </div>
</nav>

<br />  
<br />  
<br />


<div style={{background:'#f1f1f1', padding: '10px', border:'none', color: 'black'}}>
<label style={{fontSize:'18px'}}>Team Name</label>
<div  class='myd_tmNAME_sess'></div>
<label style={{fontSize:'18px'}}>Team Invitation Id</label>
<div  class='myd_tmID_sess'></div>

{/* as comment
<button style='display:none;background:#ddd; color:black;padding:10px;border-radius:20%;' id="copy_btn"  data-copyteamid="hello" class="copy_btn" title="Copy Team Id"><i class="fa fa-copy" aria-hidden="true"></i> Copy Team ID</button>
*/}

<input type="hidden" class="myd_tmID_sess_val" id="myd_tmID_sess_send" value="" />
<button style={{background:'#ddd', color:'black', padding:'10px', borderRadius:'20%'}} class="copy_btn" title="Copy Team Id"><i class="fa fa-copy" aria-hidden="true"></i> Copy Team ID</button>

</div>

<p></p><br />





<div style={{background:'#c1c1c1', padding:'10px', border:'none', color:'black'}}>
<label style={{fontSize:'18px'}}>My Projects</label><br />
<div id="loader_pc"></div>
<div id="result_pc"></div>
</div>


<p></p><br />


<div style={{background:'#c1c1c1', padding:'10px', border:'none', color:'black'}}>
<label style={{fontSize:'18px'}}>Manage Issues On Calendar</label><br />
<button data-toggle='modal' data-target='#myModal_calendar_allIssues'  title='Click to Manage All Issues On Calendar' class='btn_action action_css'>Access <span style={{color:'#3b5998'}}><b>All Issues</b></span> on Calendar</button><br />

<button data-toggle='modal' data-target='#myModal_calendar_openIssues'  title='Click to Manage Open Issues On Calendar' class='btn_action action_css'>Access <span style={{color:'#3b5998'}}><b>Open Issues</b></span> on Calendar</button><br />
<button data-toggle='modal' data-target='#myModal_calendar_doneIssues'  title='Click to Manage Done Issues On Calendar' class='btn_action action_css'>Access <span style={{color:'#3b5998'}}><b>Done Issues</b></span> on Calendar</button><br />

</div>

<p></p><br />



<div style={{background:'#f1f1f1', padding:'10px', border:'none', color:'black'}}>




<label style={{fontSize:'18px'}}>Manage Posts Issues</label><br />
<button style={{width:'100%'}} title='All Issues' class='action_css'><a style={{color:'black'}} href="/dashboard">All Issues</a></button><br />
<button  style={{width:'100%'}} title='Open Issues' class='action_css'><a style={{color:'black'}} href={`/openisuue/${this.state.members_teamid}`}>Open Issues</a></button><br />
<button style={{width:'100%'}} title='Done Issues' class='action_css'><a style={{color:'black'}} href={`/doneisuue/${this.state.members_teamid}`}>Done Issues</a></button><br />
<button style={{width:'100%'}} title='Issues Viewed Recently' class='action_css'><a style={{color:'black'}} href={`/viewedisuue/${this.state.members_teamid}`}>Issues Viewed Currently</a></button><br />
</div>


<p></p><br />



<div style={{background:'#ddd', padding:'10px', border:'none', color:'black'}}>
<label style={{fontSize:'18px'}}>My Own Issues</label> <span class='myd_photo_sess1'></span><br />
<button style={{width:'100%'}} title='All My Issues' class='action_css'><a style={{color:'black'}} href={`/myprofile/${this.state.users_teamid}/${this.state.users_userid}`}>All My Issues</a></button><br />
<button  style={{width:'100%'}} title='My Open Issues' class='action_css'><a style={{color:'black'}} href={`/myopenissue/${this.state.users_teamid}/${this.state.users_userid}`}>My Open Issues</a></button><br />
<button style={{width:'100%'}} title='My Done Issues' class='action_css'><a style={{color:'black'}} href={`/mydoneissue/${this.state.users_teamid}/${this.state.users_userid}`}>My Done Issues</a></button><br />
</div>


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

   <div>
</div>  



  
    
      
    </div>


{/*   end left column */}








{/*   start right column all */}


    <div class="right-column-all" >

{/* center Section starts */}
<div class="">



{/* start loading Issues */}
<br />
<div id="content">
   
 
        <div id="res_issues"></div>
<div id="nomore_content_check"></div>
<div id="loader_check"></div>
<div id="result_check"></div>

        <div id="">
            

<div id="loader_posts"></div>
 
        </div>
    </div>


{/* end loading Issues */}





{/*  start loading Issues Reply */}

<div id="content">
   
 
        <div id="res_issues_reply" ></div>
<div id="nomore_content_check_reply"></div>
<div id="loader_check_reply"></div>
<div id="result_check_reply"></div>

        <div id="">
            <input type="hidden" id="form_queryid_reply" value="0" />
            <input type="hidden" id="form_querytotal_reply" value="0" />

<div id="loader_posts_reply" ></div><br />


<div id="commentsubmissionResult"></div>
<br />
            <input type="button" style={{width:'100%'}} class="button myform_btn_css" title='Load More Reply' value="LoadMore Reply" id="loadmore_btn_reply" />
       <br /> </div>
    </div>








<div class="col-sm-12 form-group">
<label>Reply</label>

<textarea  id="comdesc" name="comdesc"  class="form-control" style={{color:'black'}}  placeholder="Enter Comments/Reply"></textarea>

<div class='loader_comments'></div>

<br />
 <button class="comment action_css">Reply/Comments Now</button>


</div>


{/*  end loading Issues Reply */}


</div>

{/* center Section end */}


</div>
 

{/*  end right column all */}  






{/*  start newRight column all */}  

    <div style={{color:'white', background:'#ddd'}} class="newRight-column-all">
    


<div style={{background:'#c1c1c1',padding:'10px',border:'none',color:'black'}}>
<label style={{fontSize:'18px'}}>Team Members</label><br />
<div id="loader_members"></div>
<div id="result_members"></div>
</div>


<p></p><br />

<br />
<br />
<br />
<br />

</div>
 

{/*  end newRight column all */}  








(/*  Action Modal starts here */}


<div class="container_action">

  <div class="modal fade " id="myModal_action" role="dialog">
    <div class="modal-dialog modal-lg modal-appear-center1 modal_mobile_resize modaling_sizing">
      <div class="modal-content">
        <div class="modal-header" style={{color:'black', background:'#ddd'}}>
 <button type="button" class="pull-right btn btn-default" data-dismiss="modal">Close</button>

          <h4 class="modal-title">Manage Issues Data</h4>
        </div>
        <div class="modal-body">
          


<label>
 Easily Manage Issues
</label>


{/* form START */}



<h4>Issue Title:  <span id="title11"></span></h4>
<b>Status: </b> <span id="status11"></span><br />
<b>Priority: </b> <span id="priority11"></span><br />





{/* start status Form */}

<div style={{background:'#f1f1f1', padding:'16px',color:'black'}}>


<center><h4> Change Issue Status</h4></center>
Use this option to either re-open Issues , Start Workig on Issues or Closed/Done Issues<br />


 <div class="form-group">
             
              <select class="col-sm-12 form-control" id="status_post" name="status_post">
<option value=""> --Select Status--</option>
<option value="Open">Open</option>
<option value="Done">Done</option>

</select>

            </div>



<div class="form-group">
<div id="loader_status"></div>
<div id="result_status"></div>
<br />
                    
<button type="button" id="status_btn" class=""  style={{background:'#ddd',color:'black',padding:'10px',border:'none'}}>Update Status</button>
</div>



</div>


{/* end status Form */}



<br /><br />




{/* start priority Form */}

<div style={{background:'#f1f1f1', padding:'16px', color:'black'}}>


<center><h4> Change Issue Priority</h4></center>
Use this option to Change Issues Priority from one form to another<br />


 <div class="form-group">
             
  <select class="col-sm-12 form-control" id="priority_post" name="priority_post">
<option value=""> --Select Priority--</option>
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>

            </div>



<div class="form-group">
<div id="loader_priority"></div>
<div id="result_priority"></div>
<br />
                    
<button type="button" id="priority_btn" class=""  style={{background:'#ddd', color:'black',padding:'10px',border:'none'}}>Update Priority</button>
</div>



</div>



{/*  end priority Form */}







<br /><br />
<br /><br />
<br /><br />
</div>

{/*  form ENDS  */}


        </div>
        <div class="modal-footer modal_footer_color" style={{color:'black',background:'#ddd'}}>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



{/*  Action Modal ends here  */}






{/* All Issues Modal starts here */}


<div class="container_action">

  <div class="modal fade " id="myModal_calendar_allIssues" role="dialog">
    <div class="modal-dialog modal-lg modal-appear-center1 modal_mobile_resize modaling_sizing">
      <div class="modal-content">
        <div class="modal-header" style={{color:'black',background:'#ddd'}}>
 <button type="button" class="pull-right btn btn-default" data-dismiss="modal">Close</button>

          <h4 class="modal-title"> Manage All  Issues From Calendar </h4>
        </div>
        <div class="modal-body">
          


<label>
 Manage and Access All  Issues From Calendar
 <button id="refresh1" class="myform_btn_css">Refresh Calendar</button>
</label>




<div class="row">
<div class="col-md-12">
<div id="loader_allissues"></div>
<div style={{color:"black"}} class="panel panel-default  calendar_allIssues"></div>	
</div>
</div> 



<br /><br />


</div>

        </div>
        <div class="modal-footer modal_footer_color" style={{color:'black',background:'#ddd'}}>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>




{/* All Issues Modal ends here */}


      
	  
	  



{/*  All Open Issues Modal starts here */}


<div class="container_action">

  <div class="modal fade " id="myModal_calendar_openIssues" role="dialog">
    <div class="modal-dialog modal-lg modal-appear-center1 modal_mobile_resize modaling_sizing">
      <div class="modal-content">
        <div class="modal-header" style={{color:'black',background:'#ddd'}}>
 <button type="button" class="pull-right btn btn-default" data-dismiss="modal">Close</button>

          <h4 class="modal-title"> Manage Open  Issues From Calendar </h4>
        </div>
        <div class="modal-body">
          


<label>
 Manage and Access Open  Issues From Calendar
 <button id="refresh2" class="myform_btn_css">Refresh Calendar</button>
</label>



<div class="row">
<div class="col-md-12">
<div id="loader_openissues"></div>
<div style={{color:'black'}} class="panel panel-default  calendar_openIssues"></div>	
</div>
</div> 



<br /><br />


</div>

        </div>
        <div class="modal-footer modal_footer_color" style={{color:'black',background:'#ddd'}}>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



{/*  All Open Issues Modal ed here */}






{/* Done or Closed issues Modal ends here */}


<div class="container_action">

  <div class="modal fade " id="myModal_calendar_doneIssues" role="dialog">
    <div class="modal-dialog modal-lg modal-appear-center1 modal_mobile_resize modaling_sizing">
      <div class="modal-content">
        <div class="modal-header" style={{color:'black', background:'#ddd'}}>
 <button type="button" class="pull-right btn btn-default" data-dismiss="modal">Close</button>

          <h4 class="modal-title"> Manage Done/Closed  Issues From Calendar </h4>
        </div>
        <div class="modal-body">
          


<label>
 Manage and Access Done/Closed  Issues From Calendar
 <button id="refresh3" class="myform_btn_css">Refresh Calendar</button>
</label>



<div class="row">
<div class="col-md-12">
<div id="loader_doneissues"></div>
<div style={{color:'black'}} class="panel panel-default  calendar_doneIssues"></div>	
</div>
</div> 



<br /><br />


</div>

        </div>
        <div class="modal-footer modal_footer_color" style={{color:'black', background:'#ddd'}}>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



{/* Done or Closed issues Modal ends here */}








{/* search engine modal starts here */}


<div class="container_search_modal">

  <div class="modal fade " id="myModal_search" role="dialog">
<div class="modal-dialog modal-lg modal-appear-center1 modal_mobile_resize modaling_sizing">
      <div class="modal-content">
        <div class="modal-header" style={{color:'black',background:'#c1c1c1'}}>
 <button type="button" class="pull-right btn btn-default" data-dismiss="modal">Close</button>
      <h4 class="modal-title">Issues Auto Suggestion Search Engine System</h4>
        </div>
        <div class="modal-body">

          
<b>Search Issues by Title name, date(Eg: 2020-11-24), project name, owner name, status(Open, Done), Priority(High, Medium, Low) etc.</b>



<div style={{background:'#ddd',color:'black',padding:'10px'}}>


{/* form START */}



<input type="text" class="search_btn" name="search_data" id="search_data" placeholder="Search by Location Addresses." />

<div id="loader_search"></div>
<div id="result_search" class='searching_res'></div>



<br /><br />


</div><br /><br />

<br /><br />

{/* form ENDS */}


        </div>
        <div class="modal-footer" style={{color:'black',background:'#c1c1c1'}}>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>



{/* search engine modal starts here */}





       <br />
        <br />
            <br />
        <br />



        
      </div>

   
       )
  }



}
