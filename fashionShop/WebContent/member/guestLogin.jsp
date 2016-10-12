<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%request.setCharacterEncoding("utf-8"); %>
<jsp:useBean id="dto" class="com.fashion.member.domain.Guest"></jsp:useBean>
<jsp:setProperty property="*" name="dto"/>
<%
	
	session.setAttribute("guest", dto);
	response.sendRedirect("/shopping/step1.jsp");
	session.setAttribute("customer_type", "guest");
%>