<%@page import="com.sds.model.board.BoardDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%! 
	BoardDAO boardDAO = new BoardDAO();
%>
<%
	request.setCharacterEncoding("utf8");
	String board_id = request.getParameter("board_id");
	out.print(board_id);
	String writer = request.getParameter("writer");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	
	int result = boardDAO.boardUpdate(board_id, writer, title, content);
	
	out.print("<script>");
	if(result !=0){
		out.print("alert('수정성공');");
		out.print("location.href='/board/list.jsp';");
	}else{
		out.print("alert('수정실패');");
		out.print("history.back();");
	}
	out.print("</script>");


%>