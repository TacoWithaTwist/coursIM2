import { Link } from 'react-router-dom';
import { useSubjectContext } from '../utils/context/useSubjectContext';
import '../cssModules/Nav.css';
export default function Nav() {
  const { subjects } = useSubjectContext();

  return (
    <nav className="navContainer">
      <div className="navLinkContainer">
        {subjects.map((item, index) => (
          <Link
            className="navLink"
            to={item.name}
            key={index}
            style={{ margin: '0 10px' }}
          >
            {item.name} {/* Display the name of each link */}
          </Link>
        ))}
      </div>
    </nav>
  );
}
