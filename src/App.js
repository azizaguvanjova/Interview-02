import "./styles.css";

import { useState } from "react";
import {useRobot, RobotProvider} from './RobotContext';

function App() {
  return (
    <RobotProvider>
    <RobotList />;
    </RobotProvider>
  
  )
}

const RobotList = () => {
  const [input, setInput] = useState('')
  const {robots, addRobot,removeRobot} = useRobot();


  const handleAddRobot = (event) => {
    event.preventDefault();
    if(input.trim()){
      addRobot(input.trim());
      setInput('');
    }
  }

return (
  <div className="container mx-auto p-4" >
    <form onSubmit={handleAddRobot} className="text-center mb-4">
      <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Generate Robot"
      className="border px-2 py-1 rounded"
      />
      <button type="submit" className= "ml-2 px-3 py-1 bg-[grey] text- black rounded">
        Enter
      </button>

    </form>
    <h1 className="text-center font-bold">Robot List</h1>
    <div className=" flex flex-wrap justify-center"
    >
      {robots.map((robot) =>(
        <img
        key= {robot.id}
         src={robot.url}
         alt={robot.name}
         className="m-2 cursor-pointer"
         />
      ))}
    </div>
  </div>
)




};
export default App;
