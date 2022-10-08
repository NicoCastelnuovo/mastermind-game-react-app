import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Difficulty from '../features/difficulty/Difficulty';
import { selectSecretSequence } from '../features/secretSequence/secretSequenceSlice';
import { useAppSelector } from './hooks';

const IntroductionPage: React.FC = () => {
  return (
    <main className='IntroductionPage'>
      <Difficulty />
      <Link to={'/game'}>Start a round VS Cpu</Link>
    </main>
  )
}

export default IntroductionPage;