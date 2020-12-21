import React,{useState} from 'react'
import BtnsPanel from "./BtnsPanel";
import Output from "./Output";

const App = () => {
    const [counter , setCounter] = useState (0);

  return (
      <div className="h-screen flex content-center justify-center flex-wrap">
          <Output counter={counter}/>
          <BtnsPanel counter={counter} setCounter={setCounter}/>
      </div>
  );
};

export default App;
