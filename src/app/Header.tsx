import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <Link className='Title' to='/' >
        <h1>Mastermind</h1>
      </Link>
    </header>
  )
}

export default Header;