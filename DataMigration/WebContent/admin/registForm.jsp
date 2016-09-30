<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function regist(){
	if(checkFile(form1.myFile)){
		alert("엑셀만 등록하세요");
		return
	}
	form1.encoding="multipart/form-data";
	form1.action="/admin/regist2.jsp";
	form1.submit();
	
}
function checkFile(obj){
	//var myFile = form1.file.value;
	//alert(obj.value);
	var path=obj.value;
	
	var ext = path.substring(path.lastIndexOf(".")+1,path.length);
	//alert(ext);
	var result=false;
	if(ext != "xls" && ext !="xlsx"){
		result=true
		return result;
	}

	
}
</script>
</head>
<body>
<form name="form1" method="post">
<input type="file" name="myFile" onChange="checkFile(this)">
<input type="button" value="우편번호등록" onClick="regist()" >
</form>
</body>
</html>