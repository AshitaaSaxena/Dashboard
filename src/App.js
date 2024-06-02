import React from 'react';
import './App.css'; 

import AlertFrequency from './components/BarChartComponent';
import AlertsByCategory from './components/LineChartComponent';
import AlertsBySeverity from './components/PieChartComponent';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <AlertFrequency />
      <AlertsByCategory />
      <AlertsBySeverity />
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" component={App} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}





export default App;