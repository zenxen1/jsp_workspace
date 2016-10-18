package com.sds.board.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.board.domain.Board;
import com.sds.board.model.BoardDAO;
import com.sds.controller.Controller;
import com.sds.controller.DispatcherServlet;

public class WriteController implements Controller{
	
	//3단계: 알맞는 비즈니스 로직 객체에게 일 시킨다!!!
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		System.out.println("게시판에 글 쓰기 원해??");
		
		String writer= req.getParameter("writer");
		String title=req.getParameter("title");
		String content=req.getParameter("content");
		
		Board board = new Board();
		board.setWriter(writer);
		board.setTitle(title);
		board.setContent(content);
		
		BoardDAO dao = new BoardDAO();
		dao.insert(board);
		
		
		//4단계: 생략
		//5단계:
		//응답후, 브라우저가 새롭게 지정한 url로 접속을 시도 끊고 다시 들어오게 함!!
		/*
		try {
			resp.sendRedirect("/board/list.do");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		/* write.do가 제 호출된다 
		RequestDispatcher dis=req.getRequestDispatcher("/board/list.jsp");
		try {
			dis.forward(req, resp);
		} catch (ServletException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		*/
		return "/board/view/write";
	}
	
	public boolean isForward() {
		return false;
	}
}
