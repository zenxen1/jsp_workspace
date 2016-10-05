<%@ page contentType="text/html;charset=utf-8"%>
<%@include file="/inc/message.jsp" %>
<%
//세션은 객체 이므로..무효화 시켜야 한다.
	session.invalidate();
	out.print(showMsgURL("로그아웃 되었습니다.", "/admin/"));
%>