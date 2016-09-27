<%@page import="com.sds.comments.domain.Comments"%>
<%@page import="com.sds.comments.dao.CommentsDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>
<%!
CommentsDAO dao = new CommentsDAO();
%>
<%
//넘겨받은 파라미터값을 이용하여 db에 insert 시키자!!
request.setCharacterEncoding("utf-8");
String board_id = request.getParameter("board_id");
String writer = request.getParameter("writer");
String title = request.getParameter("title");

Comments dto = new Comments();
dto.setBoard_id(Integer.parseInt(board_id));
dto.setWriter(writer);
dto.setTitle(title);

int result = dao.insert(dto);

if(result !=0){
	out.print(showMsgURL("코멘트등록완료", "/board/detail.jsp?board_id="+board_id));
}else{
	out.print(showMsgBACK("코멘트등록실패"));
}


%>