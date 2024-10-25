SET SERVEROUTPUT ON

DECLARE 

    v_n INTEGER;

BEGIN 

    v_n := 100;
    
    DBMS_OUTPUT.PUT_LINE('La valeur est : ' || v_n);

    DBMS_OUTPUT.PUT_LINE('deuxi�me ligne');

END;
