import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }

    // --------------- Approach 1 -------------------
    render() {

        let message
        if(this.state.isLoggedIn)
            message = <div>Welcome Tony</div>
        else
            message = <div>Welcome Guest</div>

        return (
            <div>
                {message}
            </div>
        )
    }
}

export default UserGreeting