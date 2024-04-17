import {useState} from 'react';
import Header from './components/Header.jsx'
import CoreConcepts from './components/CoreCocepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}
export default App;