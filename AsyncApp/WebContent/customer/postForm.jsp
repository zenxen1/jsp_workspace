<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function getHttp(){
	var xhttp;
	if(xhttp==undefined){
		if(window.XMLHttpRequest){
			xhttp= new XMLHttpRequest(); //모든 브라우저 공통
		}else{
			xhttp= new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xhttp;
}

function zipSerch(){
var xhttp=getHttp();
	/*
	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	//alert(xhttp.responseText);
        	//div안에 동적으로 컨텐츠를 구성해 보자!1
        	var text = xhttp.responseText;
        	var obj = JSON.parse(text);
        	
        	
        	
        	var customerList = document.getElementById("customerList");
        	var tag = "<table border=\"1px\">";
        	for(var i=0;i<obj.customerList.length;i++){
        	tag = tag +"<tr>";
        	tag = tag +"<td>"+obj.customerList[i].customer_id+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].id+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].password+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].zipcode1+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].zipcode2+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].addr1+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].addr2+"</td>";
        	tag = tag +"<td>"+obj.customerList[i].regdate+"</td>";
        	tag = tag +"</tr>";
        	}
        	tag = tag +"</table>";
        	customerList.innerHTML=tag;
        }
    };
	
	*/
	xhttp.open("get","/customer/post.jsp?dong="+form1.dong.value,true);
	xhttp.send();
}

</script>
</head>
<body>
<form name="form1" method="post">
<pre>
	<input type="text" name="dong">
	<input type="button" value="검색" onClick="zipSerch()">
	<table>
	<tr>
		<td><a href="">우편호</a></td>
	</tr>
	</table>
</pre>
</form>
</body>
</html>