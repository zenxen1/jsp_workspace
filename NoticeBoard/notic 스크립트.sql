create table notice(
notice_id number primary key
,writer varchar2(20)
,title varchar2(20)
,regdate date default sysdate
,hit number default 0
,content clob
);

create sequence seq_notice
INCREMENT BY 1
start with 1;



