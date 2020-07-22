import React from 'react'

class Message extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            time: '',
            body: ''
        }
    }

    

    render() {
        return(
            <h3>Here is a message</h3>
        )
    }
}

export default Message