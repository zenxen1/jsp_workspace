drop table member;
create table member(
member_id number primary key
,id varchar2(20)
,password varchar2(20)
,member_name VARCHAR2(30)
,phone1 VARCHAR2(4)
,phone2 VARCHAR2(4)
,phone3 VARCHAR2(4)
,email varchar2(50)
,zipcode1 VARCHAR2(4)
,zipcode2 VARCHAR2(4)
,addr1 VARCHAR2(100)
,addr2 VARCHAR2(100)
,regdate date default sysdate
);

create sequence seq_member
increment by 1
start with 1; 

create table guest(
guest_id number primary key
,guest_name varchar2(30)
,tel1 VARCHAR2(4)
,tel2 VARCHAR2(4)
,tel3 VARCHAR2(4)
,mail varchar2(50)
,post1 VARCHAR2(4)
,post2 VARCHAR2(4)
,home1 VARCHAR2(100)
,home2 VARCHAR2(100)
,regdate date default sysdate
);

create sequence seq_guest
increment by 1
start with 1;

insert into member (member_id,member_name) values (seq_member.nextval,'영실');

create table dest(
dest_id number primary key
,dest_name varchar2(30)
,cell1 VARCHAR2(4)
,cell2 VARCHAR2(4)
,cell3 VARCHAR2(4)
,zip1 VARCHAR2(4)
,zip2 VARCHAR2(4)
,house1 VARCHAR2(100)
,house2 VARCHAR2(100)
,msg varchar2(100)
);

create sequence seq_dest
increment by 1
start with 1;

create table ordersum(
ordersum_id number primary key
,customer_id number
,regdate date default sysdate
,dest_id number
,payment_id number
,ispay varchar2(3)
);

create sequence seq_ordersum
increment by 1
start with 1;

create table orderdetail(
oderdetail_id number primary key
,ordersum_id number
,product_id number
,color varchar2(20)
,psize varchar2(10)
,ea number 
);

create sequence seq_orderdetail
increment by 1
start with 1;

create table customer(
customer_id number primary key
,customer_type varchar2(6)
,type_id number
);

create sequence seq_customer
increment by 1
start with 1;

create table payment(
payment_id number primary key
,totalbuy number
,totalpay number
,pay_name varchar2(30)
,bank_id number
);

create table bank(
bank_id number primary key
,bank_name varchar2(10)
,bank_num varchar2(30)
);

create sequence seq_payment
increment by 1
start with 1;

create sequence seq_bank
increment by 1
start with 1;

insert into bank(bank_id,bank_name,bank_num) values (seq_bank.nextval,'국민','123-453234-103');
insert into bank(bank_id,bank_name,bank_num) values (seq_bank.nextval,'우리','121-234234-105');
insert into bank(bank_id,bank_name,bank_num) values (seq_bank.nextval,'신한','124-233274-133');
commit;