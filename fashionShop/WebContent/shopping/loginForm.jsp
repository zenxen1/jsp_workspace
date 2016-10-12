<%@ page contentType="text/html; charset=utf-8"%>
<%@include file="/inc/header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
#wrapper{
width:90%;
height:300px;
border:1px solid #000;
}
#left{
width:50%;
height:300px;
background:yellow;
float:left;
}
#right{
width:50%;
height:300px;
background:pink;
float:left;
}
</style>
<script>
function memberLogin(){
	//로그인 인증을 서버에 요청하자
	form1.method="post";
	form1.action="/member/login.jsp";
	form1.submit();
}
function guestLogin(){
	form2.method = "post";
	form2.action="/member/guestLogin.jsp"
	form2.submit();
}
</script>
</head>
<body>
<div id="wrapper">
<div id="left">
<form name="form1">
<pre>
회원구매
ID<input type ="text" name="id">
패스워드<input type ="password" name="password">
<input type="button" value="로그인" onClick="memberLogin()"><input type="button" value="회원가입">
</pre>
</form>
</div>
<div id="right">
<form name="form2">
<pre>
비회원구매
이름<input type ="text" name="guest_name">
연락처<input type ="text" name="tel1">
-<input type ="text" name="tel2">
-<input type ="text" name="tel3">
<input type="button" value="구매하기" onClick="guestLogin()">
</pre>
</form>
</div>
</div>
</body>
</html>