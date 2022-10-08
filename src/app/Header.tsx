import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Mastermind</h1>
      </Link>
      <a className='github-link' href="#">
        <FaGithub />
      </a>
    </header>
  )
}

export default Header;