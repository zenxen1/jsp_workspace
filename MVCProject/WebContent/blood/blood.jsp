<%@ page contentType="text/html; charset=UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
function getAdvice(){
	form1.action="/blood";
	form1.submit();
}
</script>
</head>
<body>
	<form name = "form1" method = "post">
	<select name="blood">
		<option value="A">A형</option>
		<option value="B">B형</option>
		<option value="O">O형</option>
		<option value="AB">AB형</option>
	</select>
	<input type="button" onClick="getAdvice()">
	</form>
</body>
</html>