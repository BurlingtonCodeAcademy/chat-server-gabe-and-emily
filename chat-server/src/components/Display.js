import React from "react"

class Display extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
        console.log(props)
    }

   

    render(){
        return(
            <div id="Display">{this.props.messages}</div>
        )
    }
}

export default Display