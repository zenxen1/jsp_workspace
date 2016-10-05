create table topcategory(
	top_id number primary key
	,title varchar2(30)
	,rank number default 0	
);

create sequence seq_topcategory
increment by 1
start with 1;

create table subcategory(
	sub_id number primary key
	,top_id number
	,title varchar2(30)
	,rank number default 0
);

create sequence seq_subcategory
increment by 1
start with 1;

insert into topcategory (top_id,title) values (seq_topcategory.nextval,'�긽�쓽');
insert into topcategory (top_id,title) values (seq_topcategory.nextval,'�븯�쓽');
insert into topcategory (top_id,title) values (seq_topcategory.nextval,'�떊諛�');
insert into topcategory (top_id,title) values (seq_topcategory.nextval,'�븸�꽭�꽌由�');
insert into topcategory (top_id,title) values (seq_topcategory.nextval,'�븸�꽭�꽌由�');

insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,1,'�젏�띁');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,1,'媛��뵒嫄�');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,1,'�떚�뀛痢�');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,1,'肄뷀듃');

insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,2,'泥�諛붿�');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,2,'�뒪而ㅽ듃');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,2,'諛섎컮吏�');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,2,'硫대컮吏�');

insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,3,'援щ몢');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,3,'�슫�룞�솕');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,3,'�뒳由ы띁');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,3,'�깒�뱾');

insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,4,'諛섏�');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,4,'洹�嫄몄씠');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,4,'紐⑷구�씠');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,4,'�뙏李�');

insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,5,'�옣媛�');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,5,'�젏�띁');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,5,'踰⑦듃');
insert into subcategory (sub_id,top_id,title) values (seq_subcategory.nextval,5,'吏�媛�');



create sequence seq_admin
increment by 1
start with 1;


commit;

create table admin(
admin_id number primary key
,id varchar2(20)
,password varchar2(20)
,name varchar2(20)
);

select * from admin where id='batman' and password='1111';
select * from subcategory where top_id =1 order by rank asc;

