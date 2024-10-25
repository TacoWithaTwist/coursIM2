DROP TABLE emp CASCADE CONSTRAINTS;
DROP TABLE dept CASCADE CONSTRAINTS;
DROP TABLE grade CASCADE CONSTRAINTS;
DROP TABLE projet CASCADE CONSTRAINTS;
DROP TABLE travaillersur CASCADE CONSTRAINTS;
DROP TABLE candidat CASCADE CONSTRAINTS;



CREATE TABLE emp(
  NumEmp number(10),
  NomEmp varchar2(20) ,
  PrenomEmp varchar2(20) ,
  Fonction varchar2(20),
  Adresse varchar2(40) ,
  Sexe varchar2(1) ,  
  AgeE number(2) ,
  Salaire number ,
  Commission number ,
  NumChef number(10) ,
  NumDept number(10) ,
  constraint pk_emp PRIMARY KEY (numEmp)
  ) ;


CREATE TABLE dept (
  numDept number(10),
  nomDept varchar2(20),
  adresse varchar2(40),
  numDirecteur number(10),
  constraint pk_dept PRIMARY KEY (numDept)
 ) ;


CREATE TABLE grade (
  NumGrade number(10) ,
  NomGrade varchar2(20) ,
  SalaireMin number ,
  SalaireMax number,
  constraint pk_grade PRIMARY KEY (NumGrade)
  ) ;


CREATE TABLE projet(
  numProjet number(10),
  nomProjet varchar2(20),
  local varchar2(40),
  numDept number(10),
  constraint pk_projet PRIMARY KEY (NumProjet)
  ) ;


CREATE TABLE travaillersur (
  numEmp number(10),
  numProjet number(10),
  nbreH number NOT NULL,
  constraint pk_travailler PRIMARY KEY (NumEmp,NumProjet)
 ) ;


CREATE TABLE candidat(
  numDos number(10),
  nomC varchar2(20),
  prenomC varchar2(20),
  poste varchar2(20),
  adresse varchar2(40),
  sexe varchar2(1),
  ageC number(2),
  nbrAnneeExp number(2),
  dateD DATE,
  accep	number(1),		
  constraint pk_candidat PRIMARY KEY (numDos)
);




ALTER TABLE dept ADD CONSTRAINT deptibfk1 FOREIGN KEY (NumDirecteur) REFERENCES emp (numEmp);


ALTER TABLE emp
  ADD CONSTRAINT empibfk4 FOREIGN KEY (numDept) REFERENCES dept (NumDept);
ALTER TABLE emp
  ADD CONSTRAINT empibfk3 FOREIGN KEY (numChef) REFERENCES emp (numEmp);


ALTER TABLE projet ADD CONSTRAINT FKProjet FOREIGN KEY (NumDept) REFERENCES dept (NumDept);

ALTER TABLE travaillersur
  ADD CONSTRAINT FKEmpt FOREIGN KEY (NumEmp) REFERENCES emp (numEmp);
ALTER TABLE travaillersur
  ADD CONSTRAINT FKPrj FOREIGN KEY (NumProjet) REFERENCES projet (NumProjet);



INSERT INTO dept VALUES(100, 'Informatique', 'Charguia2', Null);
INSERT INTO dept VALUES(200, 'Industriel', 'Lac2', Null);
INSERT INTO dept VALUES(300, 'RH', 'Centre Ville', Null);
INSERT INTO dept VALUES(400, 'Production', 'Charguia2', Null);
INSERT INTO dept VALUES(500, 'Comptabilit�', 'Cit� Ennasr', Null);


INSERT INTO emp VALUES(10, 'Ben Youssef', 'Mehdi', 'PDG', 'Nasr2', 'M', 46, 3566, 2000, NULL, 100);
INSERT INTO emp VALUES(20, 'Ghedira', 'Olfa', 'DG', 'Le Bardo', 'F', 51, 2500, 1700, 10, 200);
INSERT INTO emp VALUES(30, 'Mabrouk', 'Nasr', 'Directeur', 'Mourouj', 'M', 46, 1300, 1000, 20, 300);
INSERT INTO emp VALUES(40, 'Bousseta', 'Kacem', 'Ingenieur', 'Tunis', 'M', 35, 1200, 500, 10, 400);
INSERT INTO emp VALUES(50, 'Yaakoubi', 'Jaafer', 'Cadre', 'Sfax', 'M', 51, 900, 460, 30, 400);
INSERT INTO emp VALUES(60, 'Gasmi', 'Ramzi', 'Comptable', 'Kef', 'M', 37, 1900, 230, NULL, NULL);
INSERT INTO emp VALUES(70, 'Beji', 'Achraf', 'Technicien', 'Gabes', 'M', 33, 1000, 0, Null,100);


UPDATE  dept SET  NumDirecteur =  10 WHERE  NumDept =100;
UPDATE  dept SET  NumDirecteur =  20 WHERE  NumDept =200;
UPDATE  dept SET  NumDirecteur =  30 WHERE  NumDept =300;
UPDATE  dept SET  NumDirecteur =  40 WHERE  NumDept =400;


INSERT INTO grade VALUES(1, 'A', 500, 1100);
INSERT INTO grade VALUES(2, 'B', 1200, 1900);
INSERT INTO grade VALUES(3, 'C', 2000, 7000);


INSERT INTO projet VALUES(1, 'Automobile', 'Borj Sedria', 400);
INSERT INTO projet VALUES(2, 'Securite', 'Charguia', 100);
INSERT INTO projet VALUES(3, 'Web', 'Charguia', 100);
INSERT INTO projet VALUES(4, 'VenteEnLigne', 'Hammamet', 200);
INSERT INTO projet VALUES(5, 'Phamarceutique', 'Hammamet', NULL);


INSERT INTO travaillersur VALUES(30, 1, 15);
INSERT INTO travaillersur VALUES(20, 2, 300);
INSERT INTO travaillersur VALUES(30, 3, 355);
INSERT INTO travaillersur VALUES(50, 1, 400);
INSERT INTO travaillersur VALUES(40, 4, 102);


INSERT INTO candidat VALUES(200, 'Cherif', 'Samir', 'Consultant', 'Charguia', 'M', 33,4, TO_DATE('10/03/2013', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(300, 'ElCherif', 'Souhail', 'Ouvrier', 'Sfax', 'M', 33,4, TO_DATE('30/12/2011', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(400, 'Smaoui', 'Ahmed', 'Ingenieur', 'Tunis', 'M', 30, 1, TO_DATE('25/06/2012', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(500, 'Dridi', 'Yosra', 'Ingenieur', 'La Marsa', 'F', 32, 5, TO_DATE('03/09/2011', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(600, 'Beji', 'Amina', 'Technicien', 'Sousse', 'F', 33, 2, TO_DATE('02/11/2011', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(700, 'Touil', 'Majdi', 'Comptable', 'Nabeur', 'M', 36, 3, TO_DATE('05/10/2009', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(800, 'ELdali', 'Alia', 'Ingenieur', 'Bizerte', 'F', 36, 1, TO_DATE('08/08/2010', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(900, 'Hamdi', 'Ossama', 'Ingenieur', 'charguia', 'M', 32, 5, TO_DATE('02/02/2014', 'DD/MM/YYYY'), 0);
INSERT INTO candidat VALUES(1000, 'Othmani', 'Amal', 'Comptable', 'Nabeur', 'F', 37, 3, TO_DATE('26/05/2016', 'DD/MM/YYYY'), 0);


COMMIT;