<%@page import="com.sds.notice.dao.copy.NoticeDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ include file="/inc/message.jsp" %>
<%!
	NoticeDAO dao = new NoticeDAO();
%>
<%
	//jsp에서 즉 서버측에서도실행되는태그를 javaee에서는 지원하며, 이러한 태그를 가리켜 빈즈태그라한다!!
	//목적 - jsp 코드의 간소화 ....(즉 사용할지 여부는 선택사항) 리퀘스트와 세터를 동시에 진행
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="dto" class="com.sds.notice.domain.Notice"></jsp:useBean>

<!-- 
<jsp:setProperty property="writer" name="dto"/>
<jsp:setPrope1rty property="title" name="dto"/>
<jsp:setProperty property="content" name="dto"/>
 -->

<jsp:setProperty property="*" name="dto"/>
<%
//글쓰기폼에서 전송되어온 파라미터 값들을 오라클에 insert !!
	//String writer = request.getParameter("writer");
	//String title = request.getParameter("title");
	//String content = request.getParameter("content");
	
	/*
	out.print(dto.getWriter());
	out.print(dto.getTitle());
	out.print(dto.getContent());
	*/
	int result = dao.insert(dto);
	/*
	if(result !=0){
		out.print("alert('등록완료');");
		out.print("location.href='/board/list.jsp'");
	}else{
		out.print("alert('등록실패');");
		out.print("history.back();");
	}
	*/
	if(result !=0){
		out.print(showMsgURL("등록완료", "/board/list.jsp"));
	}else{
		out.print(showMsgBACK("등록실패"));
	}


%>