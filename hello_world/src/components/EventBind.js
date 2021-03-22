import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this) /* Part of approach 3 */
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Button Click</button> */}
                {/* Approach 2 */}
                {/* <button onClick={ () => this.clickHandler()}>Event Bind Button Click</button> */}
                {/* Approach 3 */}
                <button onClick={this.clickHandler}>Event Bind Button Click</button>
            </div>
        )
    }
}

export default EventBind
