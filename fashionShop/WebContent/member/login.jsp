<%@page import="com.fashion.member.domain.Member"%>
<%@page import="com.fashion.member.mybatis.dao.MemberDAO"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%!MemberDAO dao = new MemberDAO(); %>
<%@ include file="/inc/message.jsp" %>
<%
//넘겨받은 아이디와 패스워드 파라미터를 이용하여, db조회후 존재하면 세션에 회원정보를 보관하고, 회원이 아니면
//회원이 아니면 욕해주고 뒤로 보내자!
String id = request.getParameter("id");
String password = request.getParameter("password");
Member dto = new Member();
dto.setId(id);
dto.setPassword(password);

Member member = dao.select(dto);
if(member==null){
	System.out.println("인증실패");
	out.print(showMsgBACK("로그인실패"));
}else{
	System.out.println("인증성공");
	session.setAttribute("member", member);
	out.print(showMsgURL("로그인성공", "/shopping/step1.jsp"));
	session.setAttribute("customer_type", "member");
}


%>