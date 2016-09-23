<%@ page contentType="text/html;charset=utf-8"%>
<%
	//게시판 페이징 처리 로직에 필요한 변수 선언!!
	int currentPage= 1;
	//링크를 눌렀을때만. 즉 null이 아닐 때만...
	if(request.getParameter("currentPage") != null){
		currentPage = Integer.parseInt(request.getParameter("currentPage"));
	}
	int totalRecord=55; //총 레코드 수
	int pageSize=10; //한 페이지당 보여질 레코드의 갯수
	int totalPage=(int)Math.ceil((float) totalRecord/pageSize);
	int blockSize=10;
	
	//힌트 : 아래의 공식은 이미 위에서선언된 변수를 조합하면 된다. 
	int firstPage=blockSize*(currentPage/blockSize)+1; //블럭당, for문의 시작 페이지
	int lastPage=firstPage+blockSize-1; //블럭당, for문의 마지막 페이지
	
	out.print("firstPage 수는 "+firstPage+"<br>");
	out.print("lastPageord 수는 "+lastPage+"<br>");

	out.print("currentPage 수는 "+currentPage+"<br>");
	out.print("totalRecord 수는 "+totalRecord+"<br>");
	out.print("pageSize 수는 "+pageSize+"<br>");
	out.print("totalPage 수는 "+totalPage+"<br>");
	out.print("blockSize 수는 "+blockSize+"<br>");
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
#box{border:1px solid #CCCCCC}
#title{font-size:9pt;font-weight:bold;color:#7F7F7F;돋움}
#category{font-size:9pt;color:#7F7F7F;돋움}
#keyword{
	width:80px;
	height:17px;
	font-size:9pt;
	border-left:1px solid #333333;
	border-top:1px solid #333333;
	border-right:1px solid #333333;
	border-bottom:1px solid #333333;
	color:#7F7F7F;돋움
}
#paging{font-size:9pt;color:#7F7F7F;돋움}
#list td{font-size:9pt;}
#copyright{font-size:9pt;}
a{text-decoration:none}
img{border:0px}

/*현재보고있는 페이지에 대한시각적 알람효과*/
.pageNum{
	color:red;
	font-size:14pt;
	font-weight:bold;
}


</style>
</head>
<body>
<table id="box" align="center" width="603" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td colspan="5"><img src="/board/images/ceil.gif" width="603" height="25"></td>
  </tr>
  <tr>
    <td height="2" colspan="5" bgcolor="#6395FA"><img src="/board/images/line_01.gif"></td>
  </tr>
  <tr id="title" align="center">
    <td width="50" height="20">번호</td>
    <td width="303" height="20">제목</td>
    <td width="100" height="20">글쓴이</td>
    <td width="100" height="20">날짜</td>
    <td width="50" height="20">조회수</td>
  </tr>
  <tr>
    <td height="1" colspan="5" bgcolor="#CCCCCC"></td>
  </tr>
	<tr>	
		<td colspan="5" id="list">
		  <table width="100%" border="0" cellpadding="0" cellspacing="0">
		    
		   	<%for(int i=1;i<=pageSize;i++){ %>
		    <tr align="center" height="20px" onMouseOver="this.style.background='#FFFF99'" onMouseOut="this.style.background=''">
			  <td width="50">1</td>
			  <td width="303"><a href="detail.jsp">제목입니다.</a></td>
			  <td width="100">관리자</td>
			  <td width="100">2008/02/10</td>
			  <td width="50">5</td>
		    </tr>
			<tr>
				<td height="1" colspan="5" background="/board/images/line_dot.gif"></td>
			</tr>
		    <%} %>
		    
		  </table>		</td>
	</tr>
  <tr>
    <td id="paging" height="20" colspan="5" align="center">
    
    
    
		<a href="/board/list.jsp">◀</a>
		<% for(int i=firstPage;i<=lastPage;i++){%>
		
			<a <%if(i==currentPage){ %>class="pageNum"<%} %> href="/board/list.jsp?currentPage=<%=i %>" >[<%=i%>]</a>
		
		<% } %>
		<a href="/board/list.jsp">▶</a>
		
		
		
    </td>
  </tr>
  <tr>
    <td height="20" colspan="5" align="right" style="padding-right:2px;">
	<table width="160" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="70">
          <select name="select" id="category">
            <option>제목</option>
            <option>내용</option>
            <option>글쓴이</option>
          </select>        </td>
        <td width="80">
          <input name="textfield" id="keyword" type="text" size="15">        </td>
        <td><img src="/board/images/search_btn.gif" width="32" height="17"></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="30" colspan="5" align="right" style="padding-right:2px;"><a href="write.jsp"><img src="/board/images/write_btin.gif" width="61" height="20" border="0"></a></td>
  </tr>
  <tr>
    <td height="1" colspan="5" bgcolor="#CCCCCC"></td>
  </tr>
  <tr>
    <td height="20" colspan="5" align="center" id="copyright">Copyright zino All Rights Reserved </td>
  </tr>
</table>
</body>
</html>
