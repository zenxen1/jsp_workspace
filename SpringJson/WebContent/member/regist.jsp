<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
function regist(){
	//alert($("#id").val());
	
	var member={
	/* 	 "id":document.getElementById().value; */
			"id":$("#id").val(),
			"password":$("#password").val(),
			"name":$("#name").val()
	}; 
	
	$.ajax({
		url:"/member/regist.do",
		dataType:"json",
		type:"post",
		contentType:"application/json;charset=utf-8",
		data:JSON.stringify(member),
		success:function(result){
			alert("서버에서 응답결과는" + result.id);
		}
		
	});
}

</script>
</head>

<body>

<div class="container">
  <h2>Vertical (basic) form</h2>
  <form>
    <div class="form-group">
      <label for="id">ID:</label>
      <input type="id" class="form-control" id="id" placeholder="Enter id">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="password" placeholder="Enter password">
    </div>
    <div class="form-group">
      <label for="name">name:</label>
      <input type="name" class="form-control" id="name" placeholder="Enter name">
    </div>
    <button class="btn btn-default" onClick="regist()">Submit</button>
  </form>
</div>

</body>
</html>

