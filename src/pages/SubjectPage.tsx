import { useParams } from 'react-router-dom';
import { useSubjectContext } from '../utils/context/useSubjectContext';

export default function Subject() {
  const { subjects } = useSubjectContext();
  const { subject } = useParams();

  const foundSubject = subjects.find((item) => item.name === subject);
  const cours = foundSubject?.coursList;
  const td = foundSubject?.tdList;
  const tp = foundSubject?.tpList;
  console.log(foundSubject);

  if (!foundSubject) {
    return <div>Subject not found</div>;
  }

  return (
    <div>
      <h1>{foundSubject.name}</h1>
      <h2>Courses:</h2>
      <div>
        <ul>
          {tp && tp.length > 0 ? (
            tp.map((item, index) => (
              <li key={index}>
                {' '}
                {/* Moved key to the <li> element */}
                <a href={item} download>
                  {item}
                </a>
              </li>
            ))
          ) : (
            <li>No Td available.</li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          {td && td.length > 0 ? (
            td.map((item, index) => (
              <li key={index}>
                {' '}
                {/* Moved key to the <li> element */}
                <a href={item} download>
                  {item}
                </a>
              </li>
            ))
          ) : (
            <li>No Td available.</li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          {cours && cours.length > 0 ? (
            cours.map((item, index) => (
              <li>
                {' '}
                <a key={index} href={item} download={true}>
                  {item}
                </a>{' '}
              </li>
              // Render each course as a list item
            ))
          ) : (
            <li>No courses available.</li> // Handle case when there are no courses
          )}
        </ul>
      </div>

      {/* Render more details about the subject here */}
    </div>
  );
}
