<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
#map {
	width: 70%;
	height: 800px;
	border: 1px solid red;
	float: left;
}

#info {
	width: 25%;
	height: 800px;
	border: 1px solid blue;
	float: left;
	background: yellow;
}

ul {
	width: 90%;
}

ul li {
	list-style: none;
}

ul li img {
	width: 90%;
}

textarea {
	width: 90%;
}

#star img {
	width: 20%;
}
</style>
<script>
	//원하는 위도,경도 및 zoom 을 설정하여 지도를 불러오자
	function loadMap() {
		var container = document.getElementById("map");
		var options = {
			center : new google.maps.LatLng(37.497602, 127.038102),
			zoom : 100
		}
		var map = new google.maps.Map(container, options);
		var lati;
		var lng;
		map.addListener("click", function(event) {
			lati = event.latLng.lat();
			lng = event.latLng.lng();

			form1.lati.value = lati;
			form1.lng.value = lng;

			//클릭시 마커 생성!!
			var marker = new google.maps.Marker({
				position : {
					lat : lati,
					lng : lng
				},
				map : map,
				title : "요기맛집!!"
			});
		});
	}
	function regist() {
		form1.encoding = "multipart/form-data";
		form1.action = "/admin/regist";
		form1.submit();
	}
/*
 * 매개변수로 넘길 input : file 컴포넌트
 */
	function preView(input) {
		var preview = document.getElementById("viewImg");

		if (input.files && input.files[0]) {//선택된 파일이 있따면....
			
			var reader = new FileReader();
			
			//파일이  읽혀지면.....
			reader.onload = function(e) {
				preview.setAttribute("src", e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		} else {//선택된 파일이 없다면.....
			preview.setAttribute("src", "placeholder.png");
		}
	}
	
</script>
</head>
<body>
	<div id="map">여기에 지도 나올 예정</div>
	<div id="info">
		<form name="form1" method="post">
			<ul>
				<li>위도 : <input type="text" name="lati"></li>
				<li>경도 : <input type="text" name="lng"></li>
				<li>상호: <input type="text" id="name" name="name"></li>
				<li>사진: <input type="file" name="img" id="img"
					onChange="preView(this)"></li>
				<li><img id="viewImg"
					src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWwAJSEqcEcSTLbBxvYWrNjOH3RSe9O6zkPz3Quc8jKERlM6JLtg"></li>
				<li><textarea rows="5" cols="20" name="content"></textarea></li>
				<li><select name="score">
						<%
							for (int i = 1; i <= 10; i++) {
						%>
						<option><%=i * 0.5%></option>
						<%
							}
						%>
				</select></li>
				<li><span id="star"> <img src="/images/half.png">
				</span></li>
				<li><input type="button" value="등록" onClick="regist()"></li>
			</ul>
		</form>
	</div>
</body>
</html>
<script
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9yZ_IHStc-L5LGxUX7CJBfOUo9B8gL9A&callback=loadMap"></script>








