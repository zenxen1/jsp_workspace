<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
function regist(){
	
}
/*
동기방식으로 아이디 중복조회를 요청할 경우, 서버의 응답이
오기 전까지 메인 실행부는 아무것도 하지 못하며, 메인 실행부
가 요청을 하러 가기때문에 화면은 새로고침이 일어난다...
즉 웹의 단점...
해결책) 요청시 비동기 방식으로 처리하자, 
           비동기 방식이란 서버의 응답이 올때까지 기다릴 필요
           없는 요청방식을 말한다..
           예) 검색, 지도.. 웹을 마치 응용프로그램 처럼 상태를
                 유지하는 것처럼 보이려고 할때..
                 
참고)  X-Internet 솔루션에는 miplatform 이란게 있다..(국내없체)                 
*/

//비동기요청을 처리하는 핵심 객체!!
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

function idCheck(){
	var xhttp=getHttp();
	//서버로부터 응답 받은 데이터를 처리해보자!!
	/*
	0: request not initialized 
	1: server connection established
	2: request received 
	3: processing request 
	4: request finished and response is ready
	*/
	//서버의 상태에 따라 아래의 콜백 함수가 호출된다..
	//서버의 상태는 총 0~4까지 5단계까지 있다..
	//비동기방식을 처리함에 있어 서버의 응답타이밍을
	//알 수 있는 유일단 단서...
	xhttp.onreadystatechange=function(){
		
		if(xhttp.readyState==0){
			console.log("요청할 준비가 안되어 있습니다."+xhttp.status);
		}else if(xhttp.readyState==1){
			console.log("서버와 연결되었습니다."+xhttp.status);
		}else if(xhttp.readyState==2){
			console.log("서버에 요청이 전달되었습니다."+xhttp.status);
		}else if(xhttp.readyState==3){
			console.log("요청을 처리하고 있습니다..."+xhttp.status);
		}else if(xhttp.readyState==4){
			console.log("요청에 대한 응답할 준비가 끝났습니다."+xhttp.status);
		}
		
		//개발자는 제4단계와 서버에서 아무런 문제가 없다는 HTTP
		//응답코드를 200으로 받았을때, 원하는 처리를 해야 한다
		if(xhttp.readyState==4 && xhttp.status==200){
			//alert(xhttp.responseText);
			
			//span 에 알맞는 메세지를 출력해주자!!
			var data=xhttp.responseText;
			var msg=document.getElementById("msg");
			msg.innerHTML=data;
		}
	}
	//비동기 요청!!
	xhttp.open("get", "/customer/id_check.jsp?id="+form1.id.value , true);
	xhttp.send(); //이 시점에 요청이 일어남
}

function regist(){
	var xhttp=getHttp();
	
	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	if(xhttp.responseText==1){
        		//alert("등록완료");
        		getList();
        	}
        }
    };
	
	xhttp.open("POST", "/customer/regist.jsp", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	var id = form1.id.value;
	var password = form1.password.value;
	var zipcode1 = form1.zipcode1.value;
	var zipcode2 = form1.zipcode2.value;
	var addr1 = form1.addr1.value;
	var addr2 = form1.addr2.value;
	
	xhttp.send("id="+id+"&password="+password+"&zipcode1="+zipcode1+"&zipcode2="+zipcode2+"&addr1="+addr1+"&addr2="+addr2);

}

function getList(){
	var xhttp=getHttp();
	
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
	
	
	xhttp.open("get","/customer/list.jsp",true);
	xhttp.send();
}
function postserch(){
	
}
</script>
</head>
<body>
<form name="form1" method="post">
	<pre>	
		ID 			: <input type="text" name="id"> <input type="button" value="중복확인" onClick="idCheck()"><span id="msg"></span>
		비밀번호	: <input type="password" name="password">
		우편번호	: <input type="text" name="zipcode1">-<input type="text" name="zipcode2"><input type="button" value="우편번호 검색" onClidck="postserch()">
		주소			: <input type="text" name="addr1">
							<input type="text" name="addr2">
		<input type="button" value="회원가입" onClick="regist()">			   
	</pre>	
</form>
<p>
<div id="customerList"></div>
</body>
</html>










