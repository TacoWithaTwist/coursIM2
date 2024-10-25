SET VERIFY OFF

ACCEPT s_nom PROMPT 'Donner votre nom : '
ACCEPT s_age PROMPT 'Donner votre age : '

DECLARE
  
    v_nom CHAR(50);
    v_age NUMBER;

BEGIN

    v_nom := '&s_nom';

    v_age := &s_age;

    DBMS_OUTPUT.PUT_LINE('Bonjour ' || v_nom);

    DBMS_OUTPUT.PUT_LINE('Votre �ge est : ' || v_age);

END;