import React from "react";

function Food({value}) {
  return <h1>I like {value}</h1>;
}

const foodLike = [{name:"1", value:"2"},{name:"4", value:"3"}];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(test => (<Food value={test.value}/>))}
    </div>
  );
}

export default App;
