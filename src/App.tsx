import React, { useState } from 'react';
import './App.css';
import Gallery from './components/gallery/gallery';
import Header from './components/header/header';


function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="app">
      <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Gallery searchInput={searchInput} />
    </div>
  );
}

export default App;
