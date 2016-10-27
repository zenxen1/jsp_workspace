<%@page import="com.sds.model.domain.Member"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    	Member member = (Member)request.getAttribute("member");
    %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<pre>
	결과:
	아이디: <%=member.getId() %>
	비밀번호:<%=member.getPassword() %>
	보유재산:
	보유차량:
	업로드파일명:<%=member.getImg().getOriginalFilename() %>
	<img src="/data/<%=member.getImg().getOriginalFilename()%>">

</pre>
</body>
</html>