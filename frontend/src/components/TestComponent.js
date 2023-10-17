import { useState } from 'react'
function Test (){
    const [message, setMessage] = useState('')

    function handleClick(){
        fetch(`/api`).then(response => response.json()).then(data=>{
            setMessage(data.message)
            console.log(data)
          }) 
        console.log("")
    }
    return (
        <div>
            <h1>React + Express</h1>
            <p>My messege from the front {message}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Test;