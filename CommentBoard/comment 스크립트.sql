create table comments (
comments_id number primary key
,board_id number
,write varchar2(20)
,title varchar2(200)
,regdate date default sysdate
);

create sequence seq_comments
increment by 1
start with 1;

