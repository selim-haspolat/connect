import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Entrance = ({ApiKey,setLogin}) => {
    const [round, setRound] = useState(0)

  return (
    <div id='entrance' className='w-[100vw] h-[100vh] flex items-center justify-center' style={{transform: `perspective(1000px) rotateY(${round * 180}deg)`}}>
        <Signup round={round} setLogin={setLogin} setRound={setRound} ApiKey={ApiKey}/>
        <Login round={round} setLogin={setLogin} setRound={setRound} ApiKey={ApiKey}/>
    </div>
  )
}

export default Entrance