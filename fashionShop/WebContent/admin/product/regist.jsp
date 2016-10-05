<%@page import="com.fashion.product.domain.TopCategory"%>
<%@page import="java.util.List"%>
<%@page import="com.fashion.product.dao.TopCategoryDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%!TopCategoryDAO topCategoryDAO=new TopCategoryDAO(); %>
<%
List <TopCategory> topList = topCategoryDAO.SelectAll();
%>
<html>
<head>
<title></title>
<link rel="stylesheet" href="/admin/css/intranet.css" type="text/css">
<style type="text/css">
<!--
	td{font-size:9pt;}
	.style1 {font-weight: bold}
	.style2 {font-weight: bold}
-->
</style>
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
function subSerch(){
	var xhttp=getHttp();

		xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	        	
	        	//alert(xhttp.responseText);
	        	//div안에 동적으로 컨텐츠를 구성해 보자!1
	        
	        	var text = xhttp.responseText;
	        	var obj = JSON.parse(text);
	        	//alert(obj);
	        	
	        	
	        	
	        	var sub = document.getElementById("category2");
	        	var tag;
	        	for(var i=0;i<obj.subList.length;i++){
	        	
	        	tag =  tag + "<option>"+obj.subList[i].title+"</option>";
	        	
	        	};
	        	
	        	sub.innerHTML=tag;
	       
	        }
	    };
		

		xhttp.open("get","/admin/subCategory.jsp?top_id="+form1.category1.value,true);
		xhttp.send();
	}
	
function subCategory(){
	subSerch();
}
</script>
</head>
<body leftmargin="50" topmargin="0" marginwidth="0" marginheight="0">
<table width="650" border="0" cellpadding="0" cellspacing="0">
<form method="post" name="form1" enctype="multipart/form-data">
<input type="hidden" name="fileType">
<tr>
	<td>&nbsp;</td>
</tr>
  <tr>
  	<td>
		<table width="650" border="0" cellspacing="0" cellpadding="0" class="default" id="intranet_write">
        <tr> 
          <td colspan="2" height="5" bgcolor="#BBBBBB"></td>
        </tr>
        <tr height="30"> 
          <td height="30" colspan="2" align="center" valign="bottom" bgcolor="#DDDDDD"style="padding-bottom:5"><b> 상품 등록</b></td>
        </tr>
        <tr> 
          <td colspan="2" height="1" bgcolor="#BBBBBB"></td>
        </tr>
        <tr> 
          <td colspan="2" height="5"></td>
        </tr>
        <tr> 
          <td width="100">카테고리</td>
          <td class="pd_l10">
			<select name="category1" onChange="subCategory()">
				<option value="0">▼ 선 택</option>
				<%for(int i=0;i<topList.size();i++){ %>
				<%TopCategory topDto = topList.get(i); %>
				<option value="<%=i+1 %>"><%=topDto.getTitle() %></option>
				<%} %>
			</select>
			<select name="category2" id="category2">
				<option value="">▼ 선 택</option>
			</select>
		</td>
        </tr>
        <tr> 
          <td width="100">제품명</td>
          <td class="pd_l10"><input name="productname" type="text" id="productName" style="width:120px" maxlength="9"></td>
        </tr>
        <tr> 
          <td width="100">성별구분</td>
          <td class="pd_l10">남성
            <input type="radio" name="gender" value="MEN">
&nbsp;&nbsp;여성
          <input name="gender" type="radio" value="WOMEN" checked></td>
        </tr>
        <tr id="pay_id" > 
          <td width="100">브랜드</td>
          <td class="pd_l10"><input name="brand" type="text" id="brand" style="width:120px" maxlength="9">          </td>
        </tr>
        <tr id="bank_id" >
          <td>원산지</td>
          <td><span class="pd_l10">
            <input name="nation" type="text" id="nation" style="width:120px" maxlength="9">
          </span></td>
        </tr>
        <tr id="bank_id" >
          <td>판매 가격</td>
          <td><span class="pd_l10">
            <input name="price" type="text" id="price" style="width:120px" maxlength="9">
          </span></td>
        </tr>
        <tr id="bank_id" >
          <td>할인가격</td>
          <td><span class="pd_l10">
            <input name="discount" type="text" id="discount" style="width:120px" maxlength="9">
          </span></td>
        </tr>
        <tr id="bank_id" >
          <td>적립율</td>
          <td><span class="pd_l10">
            <input name="point" type="text" id="ratio" style="width:120px" maxlength="9">
          %</span></td>
        </tr>
        <tr id="bank_id" >
          <td>간단 소개</td>
          <td><span class="pd_l10">
            <input name="memo" type="text" id="memo" style="width:400px" maxlength="9">
          </span></td>
        </tr>
        <tr id="bank_id" >
          <td>사이즈</td>
          <td><span class="pd_l10">
            <input name="psize" type="text" id="size" style="width:120px" maxlength="9">
          * 쉼표로 구분 ex) 95 , 100 , 105 </span></td>
        </tr>
        <tr id="bank_id" >
          <td>색상</td>
          <td><span class="pd_l10">
            <input name="color" type="text" id="color" style="width:120px" maxlength="9">
* 쉼표로 구분 ex) blue ,yellow ,red </span></td>
        </tr>
        <tr id="bank_id" >
          <td>재고량</td>
          <td><span class="pd_l10">
            <input name="stock" type="text"  style="width:120px" maxlength="9"></span></td>
        </tr>
        <tr id="bank_id" >
          <td>상품 이미지 </td>
          <td><input type="file" name="filename" onChange="preView()"></td>
        </tr>
        <tr> 
          <td width="100">상세 설명 </td>
          <td class="pd_l10"><textarea name="detail" cols="80" rows="10" id="content" style="border:1px solid #444444;"></textarea></td>
        </tr>
        <tr> 
          <td colspan="2" height="5" bgcolor="#BBBBBB"></td>
        </tr>
	</table>
	<table width="650" border="0" cellspacing="0" cellpadding="0">
          <tr> 
            <td colspan="2" align="right" style="padding-top:10">
			<a href="javascript:history.back();" class="but">목록보기</a>
            <a href="javascript:regist();" class="but">상품등록</a> 
          </tr>
      </table>
	  </td>
  </tr>
  <tr> 
    <td width="590" height="10" colspan="2" valign="top"></td>
  </tr>
  <tr><td><table width="590" border="0" cellpadding="0" cellspacing="0" align="center" class="copyright">
   <tr>
    <td height="43"></td>
  </tr>
  <tr>
    <td class="schedule">COPYRIGHT(C) 2002 BY  Java Fashion ALL RIGHTS RESERVED.</td>
  </tr>
</table>
</td></tr>
  </form>
</table>
</body>
</html>
