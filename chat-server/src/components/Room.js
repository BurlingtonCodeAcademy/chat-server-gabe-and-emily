import React from "react";
import Display from "./Display";
import "../App.css";

let userName = "";
let time = "";
let message = "";

class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      message: "",
      time: "",
      msgArray: [],
    };
  }

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
            message: message,
            time: time,
          },
        ]),
      };
    });
    console.log(this.state.msgArray);
  };

  handleChange = (evt) => {
    evt.preventDefault();
    let d = new Date();
    userName = evt.target.value;
    time = d.toString();
  };

  messageChange = (evt) => {
    evt.preventDefault();
    let d = new Date();
      message = evt.target.value;
      time = d.toString()
  };

  render() {
    return (
      <>
        <h1>This is the Room Page</h1>
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
          myMessage={this.state.message}
          user={this.state.user}
          time={this.state.time}
        />
      </>
    );
  }
}

export default Room;
