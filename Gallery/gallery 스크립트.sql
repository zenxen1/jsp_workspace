create table gallery(
gallery_id number primary key
,writer varchar2(20)
,title varchar2(100)
,regdate date default sysdate
,hit number default 0
,content clob
,img varchar2(50)
);

create sequence seq_gallery
increment by 1
start with 1;