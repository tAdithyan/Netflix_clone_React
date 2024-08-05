import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals,Action } from './urls';
const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title={'Netflix Orginals'} url={originals}  />
      <RowPost title={'Action'} isSmall  url={Action}/>
    </div>
  );
};

export default App;
