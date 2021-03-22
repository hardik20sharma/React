import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Clicked the button through class')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click Button</button>
            </div>
        )
    }
}

export default ClassClick
