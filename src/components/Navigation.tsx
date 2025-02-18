import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/contents'>SaveImage</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
