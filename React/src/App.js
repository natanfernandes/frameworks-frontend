import React from 'react';
import './App.css'
import Header from './components/Header'
import Ranking from './components/Ranking'

const data = [
  {"nome":"MARIA","frequencia":11734129,"ranking":1},
  {"nome":"JOSE","frequencia":5754529,"ranking":2},
  {"nome":"ANA","frequencia":3089858,"ranking":3},
  {"nome":"JOAO","frequencia":2984119,"ranking":4},
  {"nome":"ANTONIO","frequencia":2576348,"ranking":5},
  {"nome":"FRANCISCO","frequencia":1772197,"ranking":6},
  {"nome":"CARLOS","frequencia":1489191,"ranking":7},
  {"nome":"PAULO","frequencia":1423262,"ranking":8},
  {"nome":"PEDRO","frequencia":1219605,"ranking":9},
  {"nome":"LUCAS","frequencia":1127310,"ranking":10}
];

function App(props) {
  return (
    <div className="App">
      <Header />
      <Ranking data={data} />
    </div>
  );
}

export default App;
