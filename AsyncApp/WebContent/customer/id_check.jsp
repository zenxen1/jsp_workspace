<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page contentType="text/html; charset=utf-8"%>
<%!CustomerDAO dao = new CustomerDAO(); %>
<%
	//넘겨받은 아이디를 이용하여, 중복체크 후, 알맞는 메세지
	//결과를 클라이언트에 전달하자!!
	String id=request.getParameter("id");
	System.out.println(id);
	boolean result=dao.isExist(id);
	System.out.println(result);
	if(result){
		out.print("사용불가");
	}else{
		out.print("사용가능");
	}
%>
