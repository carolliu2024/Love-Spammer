import { useState } from 'react'
import './App.css'

import { LoveLetter } from './loveletter'


function Home() {
  const [count, setCount] = useState(0)
  function popup(){
    var left = Math.random() * screen.width;
    var top = Math.random() * screen.height;
    var features = `width=500, height=500, left=${left}, top = ${top}`;
    window.open("/message", "", features);
    // newWindow.moveBy(500,0);
  }
  return (
    <div className="Home">
      <div>
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