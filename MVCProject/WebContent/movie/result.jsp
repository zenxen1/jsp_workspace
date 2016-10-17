<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//요청을 받는 역활 - 컨트롤러
	//Controller란? 디자인과 로직을 분리시켜주기위해, 디자인과 로직의 중간에서 요청을 받고, 처리된 요청에 의해 반환된
	//결과를 디자인에 다시 전달 하는 역할을 수행하는 업무 파트
	//음식점 : 입구에서 주문받는 알바생
	//
	//request.setCharacterEncoding("utf-8");
	//String movie = request.getParameter("movie");
	
	String msg = (String)request.getAttribute("msg");

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
판단결과:<%=msg %>
</body>
</html>