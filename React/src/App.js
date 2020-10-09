import React from 'react';
import './App.css'
import Header from './components/Header'
import Ranking from './components/Ranking'

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Ranking data={data} />
    </div>
  );
}

export default App;
