import React from 'react';
import Header from './app/Header';
import IntroductionPage from './app/IntroductionPage';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import GamePage from './app/GamePage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<IntroductionPage />}/>
        <Route path="/game" element={<GamePage />}/>
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App;
