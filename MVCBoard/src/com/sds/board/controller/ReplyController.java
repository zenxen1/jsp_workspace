package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.board.model.ReBoardDAO;
import com.sds.controller.Controller;
import com.sds.domain.ReBoard;

public class ReplyController implements Controller{
	ReBoardDAO dao = new ReBoardDAO();
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		ReBoard board = new ReBoard();
		
		board.setWriter(req.getParameter("r_writer"));
		board.setTitle(req.getParameter("r_title"));
		board.setContent(req.getParameter("r_content"));
		board.setTeam(Integer.parseInt(req.getParameter("team")));
		board.setRank(Integer.parseInt(req.getParameter("rank")));
		board.setDepth(Integer.parseInt(req.getParameter("depth")));
		
		int result = dao.reply(board);
		
		return "/reboard/view/reply";
	}
	public boolean isForward() {
		return false;
	}
}
