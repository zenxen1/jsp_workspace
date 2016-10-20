package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.board.model.ReBoardDAO;
import com.sds.controller.Controller;
import com.sds.domain.ReBoard;

public class WriteController implements Controller{
	ReBoardDAO dao = new ReBoardDAO();
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		ReBoard board = new ReBoard();
		
		board.setTitle(req.getParameter("title"));
		board.setWriter(req.getParameter("writer"));
		board.setContent(req.getParameter("content"));
				
		dao.insert(board);
		
		return "/reboard/view/write";
	}
	public boolean isForward() {
		return false;
	}
}
