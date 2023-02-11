import { useState } from 'react'
import './App.css'

import { LoveLetter } from './loveletter'
import { Blob } from './Blob'

function Home() {
  const [count, setCount] = useState(0)
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function popup(){
    var left = Math.random() * screen.width;
    var top = Math.random() * screen.height;
    var features = `width=500, height=500, left=${left}, top = ${top}`;
    window.open("/message", "", features);
    // newWindow.moveBy(500,0);
  }
  function blobMove(e){
    setX(e.clientX);
    setY(e.clientY);
    // console.log("x = ",x, "y=",y);
  }
  return (
    <div className="Home" onMouseMove={e => blobMove(e)}>
      <div id='blob' style={{left: x, top: y, position:'absolute'}}>
          <img src={'blobfish.png'} style={{ width: 200}}></img>
      </div>
      <h1>Love Letter Generator</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          i like dogs
        </p>
      </div>
      <p className="read-the-docs">
        UWU
      </p>
      {/* window.location.hostname  */}
      <button onClick = {() => popup()}>
        Open love letter
      </button>

    </div>
  )
}

export default Home