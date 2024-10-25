import { createContext, useContext } from 'react';
import { Subject } from '../subject';
interface SubjectContextType {
  subjects: Array<Subject>;
  addSubject: (name: string) => void;
}

const SubjectContext = createContext<SubjectContextType | undefined>(undefined);

const useSubjectContext = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error('useSubjectContext must be used within a SubjectProvider');
  }
  return context;
};

export { useSubjectContext, SubjectContext };
