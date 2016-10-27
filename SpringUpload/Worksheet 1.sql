create table member(
member_id number primary key
,id varchar2(20)
,password varchar2(20)
,profile varchar2(50)
);

create sequence seq_member
increment by 1
start with 1;

create table asset(
asset_id number primary key
,member_id number
,money number default 0
,car varchar2(30)
);

create sequence seq_asset
increment by 1
start with 1;