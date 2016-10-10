CREATE TABLE comments
(
   comments_id   NUMBER PRIMARY KEY,
   product_id    NUMBER,
   title         VARCHAR2 (100),
   writer        VARCHAR2 (20),
   regdate       DATE DEFAULT SYSDATE
);

CREATE SEQUENCE seq_comments INCREMENT BY 1 START WITH 1;