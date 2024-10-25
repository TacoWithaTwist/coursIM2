// SubjectContext.tsx
import React, { ReactNode, useState } from 'react';
import { Subject } from '../subject';
import { createSubject } from '../subjectFactory';
import { SubjectContext } from './useSubjectContext';
import { subjectsSeed } from '../seeds';
interface SubjectProviderProps {
  children: ReactNode;
}
interface SubjectContextType {
  subjects: Array<Subject>;
  addSubject: (name: string) => void;
}
const SubjectProvider: React.FC<SubjectProviderProps> = ({ children }) => {
  const [subjects, setSubjects] = useState<Array<Subject>>(subjectsSeed);

  const addSubject = (name: string) => {
    const newSubject = createSubject(name);
    setSubjects((prev) => [...prev, newSubject]);
  };

  const value: SubjectContextType = {
    subjects,
    addSubject,
  };

  return (
    <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>
  );
};

export { SubjectProvider };
