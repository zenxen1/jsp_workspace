CREATE TABLE board
(
   board_id   NUMBER PRIMARY KEY,
   title      VARCHAR2 (100),
   writer     VARCHAR2 (20),
   regdate    DATE DEFAULT SYSDATE,
   hit        NUMBER DEFAULT 0,
   content    CLOB
);

CREATE SEQUENCE seq_board INCREMENT BY 1 START WITH 1;