import React from "react";

import './Contact_us.css';

import emailjs from 'emailjs-com';


var receivingEmail = "aiche.iitr@gmail.com";

var user_id =process.env.REACT_APP_USER_ID;

var template_id =process.env.REACT_APP_TEMPLATE_ID;

var service_id = process.env.REACT_APP_SERVICE_ID;


emailjs.init(user_id);

var $  = window.$;

export default class Contact_us extends React.Component {

    constructor(props) {
        super();
        this.state = {Name : "" ,Organization : "", Email : "", Phone : "", Message : ""};
    }

    sendMail (templateId, variables) {
        
        var flag = false;

        emailjs.send(
        service_id, templateId,
        variables
        ).then(res => {
            console.log('Email successfully sent!')
            alert("sent");
            flag = true;
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
              console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
              alert("something went wrong, please try again")
            })
      }




    ValidateEmail(input){

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        return input.match(validRegex);
    }



    handleSubmit = (event)=>{
        event.preventDefault();
        // console.log("this.state.Email ==>",this.state.Email);
        var isCorrectEmail = true;
        
        if(!this.ValidateEmail(this.state.Email)){
            isCorrectEmail = false;
            alert("invalid email");
        }

        if(isCorrectEmail == true){
        var templateId = template_id;
        var stateObj = this.state;
        // console.log("sending mail from ", this.state.Email);
        var msgToSend = `Hii, Iam ${stateObj.Name} from ${stateObj.Organization} and Iam contacting you for ${stateObj.Message}, Here is my contact number ${stateObj.Phone}`
        this.sendMail(templateId, {message: msgToSend, from_name: this.state.Email, to_name : receivingEmail});
        }
    }




    handleChange= (event,name) =>{
        this.setState({[name] : event.target.value});
        // setTimeout(() =>{
        //   console.log("this.state ==>",this.state)
        // },2000)  
    }

    render(){
        return(
            <div className = "container">
            <div class="container">
                <div class="row">
                <h1 class="text-center"><a href="#myModal" role="button" class="btn btn-primary btn-lg" data-toggle="modal">Contact Us</a></h1>
                </div>
            </div>
        <div id="myModal" class="modal fade" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                <form class="form-horizontal col-sm-12" onSubmit = {this.handleSubmit}  >
                    <div class="form-group"><label>Name</label><input onChange = {(event)=>{
                        this.handleChange(event,"Name");
                    }} class="form-control required" placeholder="Your name" data-placement="top" data-trigger="manual" data-content="Must be at least 3 characters long, and must only contain letters." type="text" required/></div>
                    <div class="form-group"><label>Organization</label><input onChange = {(event)=>{
                        this.handleChange(event,"Organization");
                    }} class="form-control required" placeholder="Your organization" data-placement="top" data-trigger="manual" type="text" required/></div>
                    <div class="form-group"><label>E-Mail</label><input onChange = {(event)=>{
                        this.handleChange(event,"Email");
                    }} class="form-control email" placeholder = "Your email"   data-placement="top" data-trigger="manual" data-content="Must be a valid e-mail address" type="text" required/></div>
                    <div class="form-group"><label>Phone</label><input onChange = {(event)=>{
                        this.handleChange(event,"Phone");
                    }} class="form-control phone" data-placement="top" data-trigger="manual" placeholder="your contact number" type="text" required/></div>
                    <div class="form-group"><label>Message</label><textarea onChange = {(event)=>{
                        this.handleChange(event,"Message");
                    }} class="form-control" placeholder="Your message here.." data-placement="top" data-trigger="manual" required></textarea></div>
                    <div class="form-group"><button type="submit" class="btn btn-success pull-right">Send</button></div>
                </form>
                </div>
                <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
                </div>
            </div>
            </div>
          </div>
          </div>
        )
    }
}
