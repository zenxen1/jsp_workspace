<%@page import="com.sds.notice.dao.copy.NoticeDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>

<%! NoticeDAO dao = new NoticeDAO();%>
<%
	request.setCharacterEncoding("utf-8");
	String notice_id = request.getParameter("notice_id");

	
	int result = dao.dbdelete(notice_id);
	if(result!=0){
		out.print(showMsgURL("삭제완료", "/board/list.jsp"));
	}else{
		out.print(showMsgBACK("삭제실패"));
	}
	
%>