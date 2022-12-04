import { Link } from 'react-router-dom';
import Difficulty from '../features/difficulty/Difficulty';

const IntroductionPage: React.FC = () => {
  return (
    <div className='IntroductionPage'>
      <Difficulty />
      <Link className='start-button' to={'/game'}>Start</Link>
    </div>
  )
}

export default IntroductionPage;