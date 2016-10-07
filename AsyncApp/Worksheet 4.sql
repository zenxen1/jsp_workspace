create table product(
product_id number primary key
,sub_id number
,product_name varchar2(30)
,gender char(2)
,brand varchar2(40)
,nation varchar2(20)
,price number default 0
,point number default 0
,discount number default 0
,memo varchar2(100)
,psize varchar2(50)
,stock number default 0
,img varchar2(50)
,detail clob
);

create sequence seq_product
increment by 1
start with 1;

insert into product(product_id,sub_id,product_name,gender,brand,nation,price,discount,point,memo,psize,color,stock,img,detail)
values(seq_product.nextavl,2,'1','',?,?,?,?,?,?,?,?,?,?); 