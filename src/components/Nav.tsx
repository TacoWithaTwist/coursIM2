import { Link } from 'react-router-dom';
import { useSubjectContext } from '../utils/context/useSubjectContext';

export default function Nav() {
  const { subjects } = useSubjectContext();

  return (
    <nav>
      <div>
        {subjects.map((item, index) => (
          <Link to={item.name} key={index} style={{ margin: '0 10px' }}>
            {item.name} {/* Display the name of each link */}
          </Link>
        ))}
      </div>
    </nav>
  );
}
