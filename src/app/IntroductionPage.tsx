import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Difficulty from '../features/difficulty/Difficulty';
import { selectSecretSequence } from '../features/secretSequence/secretSequenceSlice';
import { useAppSelector } from './hooks';

const IntroductionPage: React.FC = () => {
  return (
    <main className='IntroductionPage'>
      <Difficulty />
      <Link className='start-button' 
        to={'/game'}>Start</Link>
    </main>
  )
}

export default IntroductionPage;