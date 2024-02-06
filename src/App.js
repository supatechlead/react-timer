import React from 'react';
import RunningToggle from './RunningToggle';
import Timer from './Timer';

function App() {
  return (
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
  );
}

export default App;
