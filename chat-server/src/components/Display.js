import React from "react";
import '../App.css';

function Display(props) {
  //maps over all messages
  return props.allMessages.map((object) => {
    //checks for it being greater than 500 characters
    if (object.message.length > 500) {
      alert("Please make your message less than 500 characters");
    } else {
      //returns a new message with properties of the message object
      return (
        <Message
          message={object.message}
          time={object.time}
          user={object.user}
        />
      );
    }
  });
}

//Message class displays relevant data
class Message extends React.Component {
  render() {
    return (
      <div>
        <span className="name">Name: {this.props.user}</span>
        <span className="messages">Message: {this.props.message}</span>
        <span className="time">Time: {this.props.time}</span>
      </div>
    );
  }
}
export default Display;
