import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <Link className='Title' to='/mastermind-game-react-app' >
        <h1>Mastermind</h1>
      </Link>
    </header>
  )
}

export default Header;