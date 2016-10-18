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
	
	//3�ܰ�: �˸´� ����Ͻ� ���� ��ü���� �� ��Ų��!!!
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		System.out.println("�Խ��ǿ� �� ���� ����??");
		
		String writer= req.getParameter("writer");
		String title=req.getParameter("title");
		String content=req.getParameter("content");
		
		Board board = new Board();
		board.setWriter(writer);
		board.setTitle(title);
		board.setContent(content);
		
		BoardDAO dao = new BoardDAO();
		dao.insert(board);
		
		
		//4�ܰ�: ����
		//5�ܰ�:
		//������, �������� ���Ӱ� ������ url�� ������ �õ� ���� �ٽ� ������ ��!!
		/*
		try {
			resp.sendRedirect("/board/list.do");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		/* write.do�� �� ȣ��ȴ� 
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
