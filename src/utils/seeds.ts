import { Subject } from './subject';
import { createSubject } from './subjectFactory';

const subjectsSeed: Array<Subject> = [
  createSubject('bd'),
  createSubject('Conception'),
  createSubject('Graphes'),
  createSubject('Java'),
  createSubject('Proba'),
  createSubject('reseau'),
  createSubject('ReseauMM'),
  createSubject('TLA'),
  createSubject('TLI'),
];

// BASE DE DOONEEEE

subjectsSeed[0].coursList = [
  '../../public/assets/cours/bd/BD-Chap1.pdf',
  '../../public/assets/cours/bd/BD-Chap2.pdf',
  '../../public/assets/cours/bd/BD-Chap3.pdf',
  '../../public/assets/cours/bd/BD-Chap3-Intro.pdf',
];
subjectsSeed[0].tpList = [
  '../../public/assets/cours/bd/BD-TP0.pdf',
  '../../public/assets/cours/bd/BD-TP1.pdf',
];

//CONCEPTION AAAAAA

subjectsSeed[1].coursList = [
  '../../public/assets/cours/Conception/ConceptionChap1.pdf',
  '../../public/assets/cours/Conception/ConceptionChap2.pdf',
  '../../public/assets/cours/Conception/ConceptionChap3.pdf',
];
subjectsSeed[1].tdList = [
  '../../public/assets/cours/Conception/ConceptionTD1.pdf',
  '../../public/assets/cours/Conception/ConeceptionTD2.pdf',
  '../../public/assets/cours/Conception/ConeceptionTD3.pdf',
];

//Graphes

//Java

subjectsSeed[3].coursList = [
  '../../public/assets/cours/Java/JavaChap1.pdf',
  '../../public/assets/cours/Java/JavaChap2.pdf',
  '../../public/assets/cours/Java/JavaChap3.pdf',
];

subjectsSeed[3].tpList = [
  '../../public/assets/cours/Java/JavaTP0.pdf',
  '../../public/assets/cours/Java/JavaTP1.pdf',
  '../../public/assets/cours/Java/JavaTP1Cor.pdf',
];

//Proba

subjectsSeed[4].coursList = ['../../public/assets/cours/Proba/ProbaCours.pdf'];

//Reseau

subjectsSeed[5].coursList = [
  '../../public/assets/cours/reseau/ReseauChap1.pdf',
  '../../public/assets/cours/reseau/ReseauChap2.pdf',
];
subjectsSeed[5].tpList = ['../../public/assets/cours/reseau/Reseau-Tp1.pdf'];

//Reseau MM

subjectsSeed[6].coursList = [
  '../../public/assets/cours/ReseauMM/ReseauMM-Chap1.pdf',
  '../../public/assets/cours/ReseauMM/ReseauMM-Chap2.pdf',
];

subjectsSeed[6].tdList = [
  '../../public/assets/cours/ReseauMM/ReseauMM-TD1.pdf',
  '../../public/assets/cours/ReseauMM/ReseauMM-TD1-Cor.pdf',
];

//TLA

subjectsSeed[7].coursList = ['../../public/assets/cours/TLA/TLAChap1.pdf'];
subjectsSeed[7].tdList = ['../../public/assets/cours/TLA/TLA-TD1.pdf'];

//TLI

subjectsSeed[8].coursList = [
  '../../public/assets/cours/TLI/TLI-CHAP1.pdf',
  '../../public/assets/cours/TLI/TLI-CHAP2.pdf',
  '../../public/assets/cours/TLI/TLI-CHAP3.pdf',
];
subjectsSeed[8].tdList = [
  'public/assets/cours/TLI/TLI-TD1.pdf',
  'public/assets/cours/TLI/TLI-TD2.pdf',
];

export { subjectsSeed };
