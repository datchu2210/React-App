import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Example from './components/Examples.jsx';
import {Fragment, useState} from 'react';

function App() {
  return (
    //<></> can also be used istead of fragment reason of using it is we can avoid extra div
    <Fragment> 
      <Header/>
      <main> 
        <CoreConcepts/>
        <Example/>
      </main>
      </Fragment>

  );
}

export default App;
