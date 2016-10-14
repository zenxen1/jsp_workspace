alter table dest
add ordersum_id number;

alter table ordersum
drop column dest_id;

alter table payment
add ordersum number;

create table eventinfo(
eventinfo_id number primary key
,title varchar2(30)
,rank number
);

create sequence seq_eventinfo
increment by 1
start with 1;

create table eventproduct(
eventproduct_id number primary key
,eventinfo_id number
,product_id number
);
create sequence seq_eventproduct
increment by 1
start with 1;

insert into EVENTINFO (EVENTINFO_ID, TITLE, RANK) 
values (seq_eventinfo.nextval,'베스트상품','1');
insert into EVENTINFO (EVENTINFO_ID, TITLE, RANK) 
values (seq_eventinfo.nextval,'신상품','2');
insert into EVENTINFO (EVENTINFO_ID, TITLE, RANK) 
values (seq_eventinfo.nextval,'MD추천상품','3');
insert into EVENTINFO (EVENTINFO_ID, TITLE, RANK) 
values (seq_eventinfo.nextval,'계절상품','4');
insert into EVENTINFO (EVENTINFO_ID, TITLE, RANK) 
values (seq_eventinfo.nextval,'인기상품','5');

commit;
select * from eventinfo;

select p.*
from eventproduct e, product p
where e.product_id=p.product_id
and e.EVENTINFO_ID=3;

--------------------------------------------------------------
-- 부서 테이블 생성/레코드 넣기
--------------------------------------------------------------
create table dept(
deptno number 
,dname varchar2(14)
,loc varchar2(13)
,primary key(deptno)
);
 
 
--------------------------------------------------------------
-- 사원 테이블 생성/레코드 넣기
--------------------------------------------------------------
 
create table emp(
empno number 
,ename varchar2(10)     
,job varchar2(9)         
,mgr number
,hiredate date
,sal number
,comm number
,deptno number
,primary key(empno)
);
 
insert into dept(deptno,dname,loc) values(10,'ACCOUNTING','NEW YORK');
insert into dept(deptno,dname,loc) values(20,'RESEARCH','DALLAS');
insert into dept(deptno,dname,loc) values(30,'SALES','CHICAGO');
insert into dept(deptno,dname,loc) values(40,'OPERATIONS','BOSTON');
 
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7369,'SMITH','CLERK',7902,'80/12/17',800,20);
insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno) values(7499,'ALLEN','SALESMAN',7698,'81/02/20',1600,300,30);
insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno) values(7521,'WARD','SALESMAN',7698,'81/02/22',1250,500,30);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7566,'JONES','MANAGER',7839,'81/04/02',2975,20);
insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno) values(7654,'MARTIN','SALESMAN',7698,'81/09/28',1250,1400,30);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7698,'BLAKE','MANAGER',7839,'81/05/01',2850,30);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7782,'CLARK','MANAGER',7839,'81/06/09',2450,10);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7788,'SCOTT','ANALYST',7566,'87/04/19',3000,20);
insert into emp(empno,ename,job,hiredate,sal,deptno) values(7839,'KING','PRESIDENT','81/11/17',5000,10);
insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno) values(7844,'TURNER','SALESMAN',7698,'81/09/08',1500,0,30);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7876,'ADAMS','CLERK',7788,'87/05/23',1100,20);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7900,'JAMES','CLERK',7698,'81/12/03',950,30);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7902,'FORD','ANALYST',7566,'81/12/03',3000,20);
insert into emp(empno,ename,job,mgr,hiredate,sal,deptno) values(7934,'MILLER','CLERK',7782,'82/01/23',1300,10); 

commit;

select d.deptno as deptno,   dname, loc,  empno, ename, job, mgr, hiredate, sal, comm  from dept d, emp e  where d.deptno=e.deptno
