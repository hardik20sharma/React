import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Clicked the button through function')
    }

    return (
        <div>
            <button onClick="clickHandler">Funcion Click Button</button>
        </div>
    )
}

export default FunctionClick
