import { useState } from 'react';


function RunningToggle() {
  const [isRunning, setIsRunning] = useState(true)

  const handleToggle = () => {
      setIsRunning((prevIsRunning)=>!prevIsRunning)
  }
  return (
        <button onClick={handleToggle}>{isRunning ? 'Stop' : 'Start'}</button>
  );
}

export default RunningToggle;
