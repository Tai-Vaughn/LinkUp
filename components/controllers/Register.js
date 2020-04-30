/* Used for reference:https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Register extends React.Component

import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      full_name:'',
      username:'',
      email:'',
      password:'',
      cpassword:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Full Name"
             floatingLabelText="Full Name"
             onChange = {(event,newValue) => this.setState({full_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
             <TextField
               type = "cpassword"
               hintText="Confirm your Password"
               floatingLabelText="Confirm Password"
               onChange = {(event,newValue) => this.setState({cpassword:newValue})}
               />
             <br/>
           <RaisedButton label="Create Account" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;
