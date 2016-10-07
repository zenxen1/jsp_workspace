create table favor(
favor_id number primary key
,lati number
,lng number
,name VARCHAR2(30)
,img varchar2(20)
,content CLOB
,score number default 0
);

create sequence seq_favor
increment by 1
start with 1;