<%@page import="java.sql.ResultSet"%>
<%@page import="com.sds.pool.PoolManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!
	PoolManager pool = PoolManager.getInstance();
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;

	String empno;
	String ename;
	String job;
	String mgr;
	String hiredate;
	String sal;
	String comm;
	String deptno;
	%>

<%
	//선택한 사원 한사람에 대한 정보를 가져와서 출력해보자!!!
	String empnum = request.getParameter("empno");

	//                                                            유저가 선택한 사원 번호
	String sql = "select * from emp where empno=" + empnum;

	out.print(sql);

	//오라클 접속
	con = pool.getConnection();
	pstmt = con.prepareStatement(sql);
	rs = pstmt.executeQuery();

	while (rs.next()) {
		empno = Integer.toString(rs.getInt("empno"));
		ename = rs.getString("ename");
		job = rs.getString("job");
		mgr = Integer.toString(rs.getInt("mgr"));
		hiredate = rs.getString("hiredate");
		sal = Integer.toString(rs.getInt("sal"));
		comm = Integer.toString(rs.getInt("comm"));
		deptno = Integer.toString(rs.getInt("deptno"));
	}
	
	pool.freeConnection(con, pstmt, rs);
	
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
	function modfiy(){
		form1.action = "/Modfiy"; //요청할 서버의 URL
		form1.submit(); //전송 행위!! 전송이 일어나는 시점!!
	}
	
	function listdelete(){
		form1.action = "/Delete"; //요청할 서버의 URL
		form1.submit(); //전송 행위!! 전송이 일어나는 시점!!
	}
	
	function listshow(){
		location.href='/list';
	}
</script>
</head>
<body bgcolor="pink">
	<form name="form1" method="post">
		<div>
		<pre>
		EMPNO:			<input type="text" name="empno" value="<%=empno%>">
		ENAME:			<input type="text" name="ename" value="<%=ename%>">
		JOB:				<input type="text" name="job" value="<%=job%>">
		MGR:				<input type="text" name="mgr" value="<%=mgr%>">
		HIREDATE:		<input type="text" name="hiredate" value="<%=hiredate%>">
		SAL:				<input type="text" name="sal" value="<%=sal%>">
		COMM:			<input type="text" name="comm" value="<%=comm%>">
		DEPTNO:		<input type="text" name="deptno" value="<%=deptno%>">
		
		<input type="button" value='수정' onClick = "modfiy()">
		<input type="button" value='삭제' onClick = "listdelete()">
		<input type="button" value='목록' onClick = "listshow()">
		</pre>
		</div>
	</form>
</body>
</html>