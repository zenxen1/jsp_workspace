create TABLE customer(
customer_id number primary key
,id varchar2(20)
,password varchar2(20)
,zipcode1 varchar2(3)
,zipcode2 varchar2(3)
,addr1 varchar2(100)
,addr2 varchar2(100)
,regdate date default sysdate
);

create sequence seq_customer
increment by 1
start with 1; 

insert into customer(customer_id,id) values (seq_customer.nextval,'zenxen');

select * from customer where id='zendfdsn';

insert into CUSTOMER (CUSTOMER_ID, ID, PASSWORD, ZIPCODE1, ZIPCODE2, ADDR1, ADDR2)
values (seq_customer.nextval,?,?,?,?,?,?) 