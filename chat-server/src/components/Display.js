import React from "react";

function Display(props) {
  return props.allMessages.map((object) => {
    return (
      <Message message={object.message} time={object.time} user={object.user} />
    );
  });
}

class Message extends React.Component {
  render() {
    return (
      <div>
        <span className='name'>Name: {this.props.user}</span>
        <span className='messages'>Message: {this.props.message}</span>
        <span className='time'>Time: {this.props.time}</span>
      </div>
    );
  }
}
export default Display;
