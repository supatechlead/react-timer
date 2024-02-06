import { createContext, useState } from 'react';
import RunningToggle from './RunningToggle';
import Timer from './Timer';

export const RunningContext = createContext({
  isRunning: false,
  setIsRunning: () => {},
})

function App() {

  const [isRunning, setIsRunning] = useState(false);

  return (
    <RunningContext.Provider value={{isRunning, setIsRunning}}>
      <div style={{ margin: 0, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ flex: 1, borderBottom: "5px solid #ccc", padding: "10px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <RunningToggle />
          </div>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Timer />
          </div>
        </div>
      </div>
    </RunningContext.Provider>
  );
}

export default App;
