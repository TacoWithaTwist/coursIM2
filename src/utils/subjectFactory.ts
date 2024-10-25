import { Subject } from './subject';

class SubjectImpl implements Subject {
  name: string;
  codeClassroom: string = '';
  coursList: Array<string> = [];
  tdList: Array<string> = [];
  tpList: Array<string> = [];
  dateDevoir: Date = new Date();
  supportYoutube: Array<string> = [];

  constructor(name: string) {
    this.name = name;
  }

  // Getters and Setters
  get getCodeClassroom() {
    return this.codeClassroom;
  }

  set setCodeClassroom(code: string) {
    this.codeClassroom = code;
  }

  get getCoursList() {
    return this.coursList;
  }

  set setCoursList(coursList: Array<string>) {
    this.coursList = coursList;
  }

  get getTdList() {
    return this.tdList;
  }

  set setTdList(tdList: Array<string>) {
    this.tdList = tdList;
  }

  get getTpList() {
    return this.tpList;
  }

  set setTpList(tpList: Array<string>) {
    this.tpList = tpList;
  }

  get getDateDevoir() {
    return this.dateDevoir;
  }

  set setDateDevoir(date: Date) {
    this.dateDevoir = date;
  }

  get getSupportYoutube() {
    return this.supportYoutube;
  }

  set setSupportYoutube(support: Array<string>) {
    this.supportYoutube = support;
  }

  // Existing Methods
  addCodeClassroom(code: string) {
    this.codeClassroom = code;
  }

  addCoursToList(cours: string) {
    this.coursList.push(cours);
  }

  addTdToList(cours: string) {
    this.tdList.push(cours);
  }

  addTpToList(cours: string) {
    this.tpList.push(cours);
  }

  addSupportToList(cours: string) {
    this.supportYoutube.push(cours);
  }
}

// Factory function
export const createSubject = (name: string): Subject => {
  return new SubjectImpl(name);
};
