import React from "react";
import Display from "./Display.js"

class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: '',
        message: "",
        time: '',
        newProperty:[]
    };
  }

  submitHandler = (evt) => {
    evt.preventDefault();
    let arrayOfMessages = this.state.newProperty.concat([{user: this.state.user, message: this.state.message, time: this.state.time}])
    console.log(arrayOfMessages)
    }



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
        <Display display={this.props.messages}/>
      </>
    );
  }
}

export default Room;