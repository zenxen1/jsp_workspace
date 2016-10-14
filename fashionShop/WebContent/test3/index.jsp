<%@page import="com.fashion.emp.Emp"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.fashion.emp.Dept"%>
<%@page import="java.util.List"%>
<%@page import="com.fashion.emp.DeptDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!
	DeptDAO dao = new DeptDAO();

%>
<%
 	List <Dept> list = dao.selectAll();
	out.print(list.size());
%>

<table width ="100%" border="1px">
	<tr>
		<td>Deptno</td>
		<td>dname</td>
		<td>loc</td>
		<td>empno</td>
		<td>ename</td>
		<td>job</td>
		<td>mgr</td>
		<td>hiredate</td>
		<td>sal</td>
		<td>comm</td>
		
	</tr>
	<%for(int i=0;i<list.size();i++){ %>
	<%Dept dept = list.get(i); %>
	<%ArrayList <Emp> empList = dept.getEmpList(); %>
	<%for(int a=0;a<empList.size();a++){ %>	
	<tr>
		<td><%=dept.getDeptno() %></td>
		<td><%=dept.getDname() %></td>
		<td><%=dept.getLoc() %></td>
		<td><%=empList.get(a).getEmpno()%></td>
		<td><%=empList.get(a).getEname() %></td>
		<td><%=empList.get(a).getJob() %></td>
		<td><%=empList.get(a).getMgr() %></td>
		<td><%=empList.get(a).getHiredate() %></td>
		<td><%=empList.get(a).getSal() %></td>
		<td><%=empList.get(a).getComm() %></td>
	</tr>
		<%} %>
	<%} %>
</table>
