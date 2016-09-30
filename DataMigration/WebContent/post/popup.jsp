<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
div {
	background: yellow;
	width: 100%;
	height: 300px;
	overflow: scroll;
}
</style>
<script>
	function getXhttp() {
		var xhttp;
		if (xhttp == undefined) {
		}
		xhttp = new XMLHttpRequest();

		return xhttp;
	}
	function sendData(zip){
		openr.form1.zipcode = zip;
		widow.close();
	}
	
	function findZip() {
		var xhttp = getXhttp();
		//alert(xhttp);
		
		 xhttp.onreadystatechange = function() {
     	   if (this.readyState == 4 && this.status == 200) {
				//alert(xhttp.responseText);
				var data = xhttp.responseText;
				var json = JSON.parse(data);
				
				//alert(json.zipList.length);
				
				var area = document.getElementById("area");
				var list = json.zipList;
				for(var i=0;i<list.length;i++){
					var obj = list[i];
					
					area.innerHTML="<a herf=\"javascript:sendData('"+obj.zipcode+"')\">"+obj.zipcode+"</a>";
					
					
					
				}
				
			}
		}
		
		
		xhttp.open("post","/post/list.jsp",true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("dong="+form1.dong.value);
	}
</script>
</head>
<body>
	<form name="form1" method="post">
		<input type="text" name="dong"> <input type="button" value="검색"
			onClick="findZip()">
	</form>
	<div id="area"></div>
</body>
</html>