<%@ page contentType="text/html;charset=utf-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>  </title>
<script>

</script>
</head>
<!--  out.print -> =  -->
<body bgcolor="<%="green"%>"> 
	<select>
		<%for(int i=1;i<=20;i++){%>
		<option><%out.print(i);%></option>
		<%}%>
	</select>
</body>
</html>
