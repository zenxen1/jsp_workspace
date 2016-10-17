<%@ page contentType="text/html; charset=UTF-8"%>
<%
/*
javaEE는 엔터프라이즈 에디션으로서,기업용 어플리케이션 시장을 타겟으로 개발된 플랫폼이다. 따라서 javaEE기반으로
어플리케이션을 개발하면, 그 규모는 언제나 거대하다..
거대한 규모의 어플리케이션을 개발하려면, 설계이론에 근거하고 개발패턴등이 적용되어야 하므로, javaEE에는 MVC 패턴을 적용한
모델2라 불리는 개발 방법을 javaEE의 스펙에 포함시켰다 즉 모델2란 javaEE로 구현한 MVC 패턴을 의미한다고 볼수있다.

Model: 로직이므로 중립적인 자바 클래스
view  : 웹기반의 디자인을 처리하기에 적절한 기술 - jsp
Controller : 클라이언트의 요청을 받을 수 있는 기술 - 서블릿

*/
%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
function getAdvice(){
	form1.action="/movie.do";
	form1.submit();
}
</script>
</head>
<body>
	<form name = "form1" method = "get">
	<select name="movie">
		<option value="시빌워">시빌워</option>
		<option value="부산행">정글북</option>
		<option value="럭키">럭키</option>
		<option value="인페르노">인페르노</option>
	</select>
	<input type="button" onClick="getAdvice()">
	</form>
</body>
</html>