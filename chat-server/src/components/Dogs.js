import React from "react";
import Display from "./Display";
import "../App.css";


// Declares global variables
let userName = "";
let time = "";
let message = "";


// Creates a class component with state
class Dogs extends React.Component {
  constructor(props) {
    super(props);

// The state keeps track of the user, their message, the time and all messages
    this.state = {
      user: "",
      message: "",
      time: "",
      msgArray: [],
    };
  }

 //Handles the submission of the form. Sets the new message into the state
  submitHandler = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => {
      return {
        user: userName,
        time: time,
        message: message,
        msgArray: prevState.msgArray.concat([
          {
            user: userName,
            message:message,
            time: time,
          },
        ]),
      };
    });
    console.log(this.state.msgArray);
  };

   //Updates the username when the user is changed in the form
  handleChange = (evt) => {
    evt.preventDefault();
    let d = new Date();
    userName = evt.target.value;
    time = d.toString();
  };

  //Updates the message when the message is changed in the form
  messageChange = (evt) => {
    evt.preventDefault();
    let d = new Date();
      message = evt.target.value;
      time = d.toString()
  };



  //Renders the display
  render() {
    return (
      <>
        <h1>This is all about Dogs</h1>
        {/* The message form */}
        <form id="message-form" onSubmit={this.submitHandler}>
          <label htmlFor="user">User:</label>
          <input
            value={this.state.value}
            type="text"
            id="user"
            placeholder="username"
            onChange={this.handleChange}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            message={this.state.value}
            onChange={this.messageChange}
            type="text"
            id="message"
            placeholder="message"
          ></textarea>
          <input type="submit" />
        </form>
        <Display
          allMessages={this.state.msgArray}
        />
      </>
    );
  }
}

// Exports the room so that it can be used in the application
export default Dogs;
