import React from 'react';


function Display(props) {
    return(
    <Message message={`This is with props: ${props.myMessage} sent by user: ${props.user} at: ${props.time}`} />
    )
}

class Message extends React.Component{
    render(){
        return(
        <span>Message: {this.props.message}</span>
        )
    }
}
export default Display;
