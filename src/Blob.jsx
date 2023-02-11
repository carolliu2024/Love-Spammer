import React, { useRef } from 'react';
// props x, y
export const Blob = ({x, y}) =>{
    // console.log(x);
    return (
        <div id='blob' style={{left: x, top: y}}>
            <img src={'blobfish.png'} style={{ width: 200}}></img>
        </div>
    )

}
