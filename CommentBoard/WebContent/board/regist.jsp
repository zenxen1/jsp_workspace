<%@page import="com.sds.board.dao.BoardDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>

<%! BoardDAO dao = new BoardDAO();%>
<jsp:useBean id="dto" class="com.sds.board.domain.Board"></jsp:useBean>
<%request.setCharacterEncoding("utf-8"); %>
<jsp:setProperty property="*" name="dto"/>
<%
	int result = dao.insert(dto);
	if(result!=0){
		out.print(showMsgURL("등록성공", "/board/list.jsp"));
	}else{
		out.print(showMsgBACK("등록실패"));
	}
%>
