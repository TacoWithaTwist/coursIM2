export interface Subject {
  name: string;
  codeClassroom: string;
  coursList: Array<string>;
  tdList: Array<string>;
  tpList: Array<string>;
  dateDevoir: Date;
  supportYoutube: Array<string>;
  addCodeClassroom: (code: string) => void;
  addCoursToList: (cours: string) => void;
  addTdToList: (cours: string) => void;
  addTpToList: (cours: string) => void;
  addSupportToList: (cours: string) => void;
}
