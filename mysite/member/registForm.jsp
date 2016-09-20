<%@ page contentType="text/html;charset=utf-8" %>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>  </title>
<style>
#box{
	width:190px;
	height:200px;
	background:yellow;
}
</style>
<script>
	window.addEventListener("load",function(){
		var btn = document.getElementById("btn");

		btn.addEventListener("click",function(){
			//오라클 연동 하지말고, 원하는 데이터만 보내주자!!
			regist();
		});
	});
	
function regist(){
	form1.action="regist.jsp";//이요청을 처리할 서버의 url...
	form1.submit(); // 전송이 일어나는 시점
}
	
</script>
</head>
<body>
	<form name="form1" method="post">
		<div id="box">
			ID :<input type ="text" name="id">
			Password :<input type ="password" name="password">
			Name : <input type ="text" name="name">
			<input type="button" value="등록" id="btn">
		</div>
	</form>
</body>
</html>
