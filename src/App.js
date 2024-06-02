import React from 'react';
import './App.css'; 
import AlertFrequency from './components/BarChartComponent';
import AlertsByCategory from './components/LineChartComponent';
import AlertsBySeverity from './components/PieChartComponent';

function App() {
  return (
    <div className="App">
      <AlertFrequency />
      <AlertsByCategory />
      <AlertsBySeverity />
    </div>
  );
}

export default App;

