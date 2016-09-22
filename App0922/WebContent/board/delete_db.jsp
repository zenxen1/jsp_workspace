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
	
	int result = boardDAO.boardDelete(board_id);
	
	out.print("<script>");
	if(result !=0){
		out.print("alert('삭제성공');");
		out.print("location.href='/board/list.jsp';");
	}else{
		out.print("alert('삭제실패');");
		out.print("history.back();");
	}
	out.print("</script>");


%>