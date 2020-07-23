import React from 'react'
import { Link } from 'react-router-dom'

class House extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <>
            <h1>This is the House</h1>
            <Link to='/room'>Link to Room</Link>
            </>
        )
    }
}

export default House