<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String color=request.getParameter("color");
	out.print("color");
	//만일 최초 접속자와 같이 아무것도 파라미터가 넘어오지 않으면, 디폴트 값을 pink로 해보자!!
	if(color==null){
		color="pink";
	}
	
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function setBg(){
	
	var c=document.getElementById("color");
	location.href="/color/bg.jsp?color="+c.value;
}
</script>
</head>
<body bgcolor="<%=color%>">
	<select id="color" name="color">
		<option value="yellow">yellow</option>
		<option value="red">red</option>
		<option value="blue">blue</option>
		<option value="green">green</option>
		<option value="navy">navy</option>		
	</select>
	<input type="button" value="배경색변경하기" onClick="setBg()"> 

</body>
</html>