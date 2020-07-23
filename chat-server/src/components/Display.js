import React from 'react';


function Display(props) {
    return(
    <Message message={`This is with props: ${props.myMessage}`} />
    )
}

class Message extends React.Component{
    render(){
        return(
        <span>{this.props.message}</span>
        )
    }
}
export default Display;