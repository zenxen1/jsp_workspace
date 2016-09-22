<%@page import="com.sds.model.board.BoardDAO"%>
<%@page import="com.sds.model.board.BoardDTO"%>
<%@page import="java.util.List"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%! BoardDAO boardDAO = new BoardDAO(); %>
<%
	String board_id = request.getParameter("board_id");
	out.print(board_id);
	List<BoardDTO> list = boardDAO.detailSelect(board_id);
%>
<%BoardDTO dto = list.get(0); %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
#box{border:1px solid #CCCCCC}
#writer,#title,#content{font-size:9pt;font-weight:bold;color:#7F7F7F;돋움}
input{
	font-size:9pt;
	border-left:1px solid #C3C3C3;
	border-top:1px solid #C3C3C3;
	border-right:1px solid #C3C3C3;
	border-bottom:1px solid #C3C3C3;
	color:#7F7F7F;돋움
}
#title input{width:250px;}
#content textarea{
width:503px;
border:0;
height:153;
background:url("/board/images/write_bg.gif");
border:#C3C3C3 1px solid 
}
#copyright{font-size:9pt;}
a{text-decoration:none}
img{border:0px}
</style>
<script type="text/javascript">
function boardUpdate(){
	form1.action = "/board/update_db.jsp?board_id=<%=board_id%>"; //요청할 서버의 URL
	form1.submit(); //전송 행위!! 전송이 일어나는 시점!!
	
	
}
function boardDelete(){
	form1.action = "/board/delete_db.jsp"; //요청할 서버의 URL
	form1.submit(); //전송 행위!! 전송이 일어나는 시점!!
}
	
</script>
</head>
<body>
<form name="form1" method="post">
<table id="box" align="center" width="603" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><img src="/board/images/ceil.gif" width="603" height="25"></td>
  </tr>
  <tr>
    <td height="2" bgcolor="#6395FA"><img src="/board/images/line_01.gif"></td>
  </tr>
  <tr>
    <td height="1" bgcolor="#CCCCCC"></td>
  </tr>
	<tr>	
		<td id="list"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="100"><input type="hidden" name="board_id" value="<%=dto.getBoard_id() %>">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr id="writer">
          
          
            <td height="25" align="center">작성자</td>
            <td><input type="text" name="writer" value="<%=dto.getWriter() %>"></td>
          </tr>
          <tr id="title">
            <td height="25" align="center">제목</td>
            <td><input type="text" name="title" value="<%=dto.getTitle() %>"></td>
          </tr>
          <tr id="content">
            <td align="center">내용</td>
            <td><textarea name="content" style=""><%=dto.getContent() %></textarea></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table></td>
	</tr>
  <tr>
    <td height="30" align="right" style="padding-right:2px;">
	<img src="/board/images/write_btin.gif" width="61" height="20" onClick="boardUpdate()">
	<img src="/board/images/delete_btn.gif" width="61" height="20" onClick="boardDelete()"> <a href="list.jsp"><img src="/board/images/list_btn.gif" width="61" height="20" border="0"></a> </td>
  </tr>
  <tr>
    <td height="1" bgcolor="#CCCCCC"></td>
  </tr>
  <tr>
    <td height="20" align="center" id="copyright">Copyright zino All Rights Reserved </td>
  </tr>
</table>
</form>
</body>
</html>
