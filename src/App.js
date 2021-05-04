import React from 'react';

import Header from './components/Header';
import ShowTasks from './components/ShowTasks'

import './App.css' 
import { GlobalStore } from './components/GlobalStore';

const App = () => {
  return (
    <>
      <div className='container'>
      <GlobalStore >
        <Header /> 
        <ShowTasks /> 
      </GlobalStore>
      </div>
    </> 
  )
}

export default App