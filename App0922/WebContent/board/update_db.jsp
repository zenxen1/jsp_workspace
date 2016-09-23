<%@page import="com.sds.model.board.BoardDTO"%>
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
	
	BoardDTO dto = new BoardDTO();
	dto.setWriter(writer);
	dto.setTitle(title);
	dto.setContent(content);
	dto.setBoard_id(Integer.parseInt(board_id));
	
	
	int result = boardDAO.boardUpdate(dto);
	
	out.print("<script>");
	if(result !=0){
		out.print("alert('수정성공');");
		out.print("location.href='/board/detail.jsp?board_id="+board_id+"';");
	}else{
		out.print("alert('수정실패');");
		out.print("history.back();");
	}
	out.print("</script>");


%>