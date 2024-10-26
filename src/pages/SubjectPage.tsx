import { useParams } from 'react-router-dom';
import { useSubjectContext } from '../utils/context/useSubjectContext';
import { arrayOfNamesFormatting } from '../utils/namingFormat';
import '../cssModules/SubjectPage.css';
export default function Subject() {
  const { subjects } = useSubjectContext();
  const { subject } = useParams();

  const foundSubject = subjects.find((item) => item.name === subject);

  const cours = foundSubject?.coursList;
  const formattedCours = arrayOfNamesFormatting(cours || []);
  const td = foundSubject?.tdList;
  const formattedTd = arrayOfNamesFormatting(td || []);
  const tp = foundSubject?.tpList;
  const formattedTp = arrayOfNamesFormatting(tp || []);

  console.log(formattedCours, formattedTd, formattedTp);

  if (!foundSubject) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="subjectContainer">
      <h1 className="subjectNameHeader">{foundSubject.name}</h1>
      <div className="subjectCoursesContainer">
        <h2 className="subjectTypeHeader">Cours:</h2>

        <ul className="linksContainer">
          {cours && cours.length > 0 ? (
            cours.map((item, index) => (
              <li>
                {' '}
                <a className="pdfLink" key={index} href={item} download={true}>
                  {formattedCours[index]}
                </a>{' '}
              </li>
            ))
          ) : (
            <li style={{ color: 'red' }}>No courses available.</li>
          )}
        </ul>
      </div>
      <div className="subjectCoursesContainer">
        <h2 className="subjectTypeHeader">TD:</h2>

        <ul className="linksContainer">
          {td && td.length > 0 ? (
            td.map((item, index) => (
              <li key={index}>
                {' '}
                <a className="pdfLink" href={item} download>
                  {formattedTd[index]}
                </a>
              </li>
            ))
          ) : (
            <li style={{ color: 'red' }}>No Td available.</li>
          )}
        </ul>
      </div>
      <div className="subjectCoursesContainer">
        <h2 className="subjectTypeHeader">TP:</h2>

        <ul className="linksContainer">
          {tp && tp.length > 0 ? (
            tp.map((item, index) => (
              <li key={index}>
                {' '}
                {/* Moved key to the <li> element */}
                <a className="pdfLink" href={item} download>
                  {formattedTp[index]}
                </a>
              </li>
            ))
          ) : (
            <li style={{ color: 'red' }}>No Tp available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
