<%@page import="com.sds.model.board.BoardDAO"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="com.sds.pool.PoolManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%!
	/*
	PoolManager pool=PoolManager.getInstance();
	Connection con;
	PreparedStatement pstmt;
	*/
	//com.sds.model.board.BoardDAO@c66caa1
	//com.sds.model.board.BoardDAO@c66caa1 멤버변수 사용시 하나만 생성된다.
	
	BoardDAO boardDAO = new BoardDAO();

	
%>


<%
	//글쓰기 폼양식으로부터 전송 되어온 파라미터값들을 이용하여,
	//오라클에 insert 시키자!!
	//그리고나서,다시list를 보여주자 
	
	
	request.setCharacterEncoding("utf-8");
	
	String writer = request.getParameter("writer");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	
	out.print(writer);
	out.print(title);
	out.print(content);
	
	//com.sds.model.board.BoardDAO@3256a2fb
	//com.sds.model.board.BoardDAO@4e97eaa9 여러개 생성된다 그래서 멤버변수로 올려야한다
	//BoardDAO boardDAO = new BoardDAO();
	out.print(boardDAO);
	int result = boardDAO.insert(writer, title, content);			

	
	/*
	//커넥션 풀로부터 Connection 대여하기!!
	con = pool.getConnection();
	
	String sql = "insert into board (board_id,writer, title, content) values (seq_board.nextval,?,?,?)";
	
	pstmt = con.prepareStatement(sql);
	
	pstmt.setString(1, writer);
	pstmt.setString(2, title);
	pstmt.setString(3, content);
	
	int result = pstmt.executeUpdate();
	*/
	
	out.print("<script>");
	if(result !=0){
		out.print("alert('입력성공');");
		out.print("location.href='/board/list.jsp';");
	}else{
		out.print("alert('입력실패');");
		out.print("history.back();");
	}
	out.print("</script>");
	
	//pool.freeConnection(con, pstmt);
%>