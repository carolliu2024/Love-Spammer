import { useState } from 'react'
import './App.css'

import { LoveLetter } from './loveletter'
import { Blob } from './Blob'

function Home() {
  // const [count, setCount] = useState(0)
  const [x, setX] = useState(5); // blob pos
  const [y, setY] = useState(5); // blob pos
  function popup(){
    var left = Math.random() * screen.width;
    var top = Math.random() * screen.height;
    var features = `width=500, height=300, left=${left}, top = ${top}`;
    window.open("/message", "", features);
    // newWindow.moveBy(500,0);
  }
  function blobMove(e){
    var targetX = e.clientX;
    var targetY = e.clientY;
    setX(x + 0.1*(targetX - x));
    setY(y + 0.1*(targetY - y));
    // console.log("x = ",x, "y=",y);
  }
  return (
    <div className="App" onMouseMove={e => blobMove(e)}>
      
      <h1>Love Letter Generator</h1>
      <button onClick = {() => {for(let i=0; i<5; i++){
        popup();
      }}}>
        Open love letter
      </button>
      <div id='blob' style={{left: x+2, top: y+2, position:'absolute'}}>
          <img src={'blobfish.png'} style={{ width: 200}}></img>
      </div>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          i like dogs
        </p>
      </div>
      <p className="read-the-docs">
        UWU
      </p>
      {/* window.location.hostname  */}
      

    </div>
  )
}

export default Home