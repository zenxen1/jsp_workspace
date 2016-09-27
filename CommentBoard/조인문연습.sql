select * from dept;
select * from emp;

--m*n�쓽 �뀒�씠釉붿씠 �삎�꽦 �맂�떎. 56嫄�
select * from emp e,dept d;
select * from emp e,dept d where e.deptno = d.deptno;

select empno,ename,job,mgr,hiredate,sal,comm, dname, loc from emp e, dept d
where e.deptno = d.deptno;  

--1. EMP �뀒�씠釉붿뿉�꽌 遺��꽌�쓽 醫낅쪟瑜� 異쒕젰�븯�떆�삤!!
select deptno from emp group by deptno;

--2. EMP �뀒�씠釉붿뿉�꽌 媛� 遺��꽌�뿉 �냼�냽�맂 �궗�썝�닔瑜� 異쒕젰�븯�떆�삤(洹몃９諛붿씠�뿉 紐낆떆�븳 而щ읆留� �삱�닔�엳�쑝�굹 吏묎퀎�빀�닔�뒗 �삁�쇅�씠�떎)
select deptno, count(empno) as �궗�썝�닔 from emp group by deptno;

--inner join : �쓷�엳 �궗�슜�븯�뒗 議곗씤, �뀒�씠釉붽컙 怨듯넻�맂 而щ읆�쓽 媛믩쭔 媛��졇�삩�떎 
select dname, count(empno) as �궗�썝�닔 from emp e, dept d 
where e.deptno=d.deptno group by d.deptno, dname;

--outer join : �뀒�씠釉붽컙 怨듯넻�릺吏� �븡�� �뜲�씠�꽣�룄 媛��졇�삱�닔 �엳�떎...
--select from 臾댁“嫄� 媛��졇�삱 �뀒�씠釉붾챸 left outer join 怨듯넻�씤 �젅肄붾뱶瑜� 媛��졇�삱 �뀒�씠釉�
select ename, dname from dept d left outer join emp e on d.deptno=e.deptno;
select ename, dname from emp e left outer join dept d on d.deptno=e.deptno;

select dname, count(empno) as �궗�썝�닔 from dept d left outer join emp e 
on e.deptno = d.deptno group by d.deptno, dname; 

select b.BOARD_ID,b.WRITER,b.title,b.hit,b.regdate, count(c.comments_id) as re from  board b left outer join comments c
on c.board_id = b.BOARD_ID group by b.title,b.BOARD_ID,b.WRITER,b.hit,b.regdate order by board_id desc;


