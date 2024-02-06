import { useContext } from 'react';
import { RunningContext } from './App';

const RunningToggle = () => {
  const { isRunning, setIsRunning } = useContext(RunningContext)

  const handleToggle = () => {
      setIsRunning((prevIsRunning)=>!prevIsRunning)
  }
  return (
        <button onClick={handleToggle}>{isRunning ? 'Stop' : 'Start'}</button>
  );
}

export default RunningToggle;
