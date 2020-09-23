import React, { useState } from "react";

const App = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);


const bigChange = () => {
  let newBg = "#34495r";  
  setBg(newBg); 
};

    return (

        <>
<div style = { { backGround : bg }}>
    <button onClick= {bigChange} > Click Me </button>
</div>

        </>
    );
} ;

export default App ;

