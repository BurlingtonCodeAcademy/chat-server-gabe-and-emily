import React from "react";

class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: '',
        message: "",
        time: ''
    };
  }

  submitHandler = (evt) => {
    evt.preventDefault();
    
  };

  handleChange = (evt) => {
      evt.preventDefault();
      this.setState({
            user: (evt.target.value),
            time: Date.now()
      })
      console.log(this.state)
  }

  messageChange = (evt) => {
      evt.preventDefault();
      this.setState ({
          message: (evt.target.value),
          time: Date.now()
      })
      console.log(this.state)
  }

  render() {
    return (
      <>
        <h1>This is the Room Page</h1>
        <form id="message-form" onSubmit={this.submitHandler}>
          <label htmlFor="user">User:</label>
          <input value={this.state.value} type="text" id="user" placeholder="username" onChange={this.handleChange} />
          <label htmlFor="message">Message:</label>
          <textarea message={this.state.value} onChange={this.messageChange} type="text" id="message" placeholder="message"></textarea>
          <input type="submit" />
        </form>
        <div id="display">
          <h3>User: {this.state.user}</h3>
          <h3>Messages: {this.state.message}</h3>
        </div>
      </>
    );
  }
}

export default Room;