<%@page import="com.fashion.admin.domain.Admin"%>
<%@page import="com.fashion.admin.dao.AdminDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@include file="/inc/message.jsp" %>
<%!AdminDAO dao = new AdminDAO(); %>
<%
	String id=request.getParameter("id");
	String password = request.getParameter("password");

	
	Admin admin = new Admin();
	admin.setId(id);
	admin.setPassword(password);
	
	admin = dao.select(admin);
	
	if(admin==null){
		out.print(showMsgBACK("로그인 정보가 올바르지 않습니다."));
	}else{
		session.setAttribute("admin", admin);
		out.print(showMsgURL("인증성공", "/admin/admin.jsp"));
	}
%>