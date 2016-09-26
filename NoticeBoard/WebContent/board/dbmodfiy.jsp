<%@page import="com.sds.notice.dao.copy.NoticeDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<jsp:useBean id="dto" class="com.sds.notice.domain.Notice"></jsp:useBean>
<% 
	request.setCharacterEncoding("utf-8");
%>
<jsp:setProperty property="*" name="dto"/>
<%@ include file="/inc/message.jsp" %>
<%! NoticeDAO dao = new NoticeDAO(); %>
<%
	int result = dao.dbupdate(dto);
	if(result !=0){
		out.print(showMsgURL("수정완료", "/board/list.jsp"));
	}else{
		out.print(showMsgBACK("수정실패"));
	}
	
%>