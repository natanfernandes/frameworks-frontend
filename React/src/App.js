import React, {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import FeatureImage from './components/FeatureImage'

function App(props) {
  const [nome, setNome] = useState('');

  const getNome = (novoNome) => {
      setNome(novoNome);
  }

  return (
    <div className="App">
      <Navbar nome={nome}/>
      <FeatureImage getNome={getNome} />
    </div>
  );
}

export default App;
