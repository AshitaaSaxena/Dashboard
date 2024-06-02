import React from 'react';
import './App.css'; 
import ReactDOM from 'react-dom';
import AlertFrequency from './components/BarChartComponent';
import AlertsByCategory from './components/LineChartComponent';
import AlertsBySeverity from './components/PieChartComponent';

function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <AlertFrequency />
      <AlertsByCategory />
      <AlertsBySeverity />
    </div>
    </React.StrictMode>
  );
}



ReactDOM.render(<App />, document.getElementById('root'));

export default App;