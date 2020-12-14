import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FeatureImage from './components/FeatureImage'
import Search from './components/Search';
import Ranking from './components/Ranking';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FeatureImage 
              title="About my name"
              text="As coisas mais legais sobre seu nome diretamente do site do IBGE."
            />
            <Ranking title="Nomes mais comuns do Brasil segundo o IBGE" />
          </Route>
          <Route exact path={`/pesquisar`}>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
