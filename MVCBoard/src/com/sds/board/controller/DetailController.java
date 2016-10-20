package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.board.model.ReBoardDAO;
import com.sds.controller.Controller;
import com.sds.domain.ReBoard;

public class DetailController implements Controller{
	ReBoardDAO dao = new ReBoardDAO();
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		String reboard_id = req.getParameter("reboard_id");
		ReBoard board = dao.selectOne(Integer.parseInt(reboard_id));
		req.setAttribute("reboard", board);
		
		return "/reboard/view/detail";
	}
	public boolean isForward() {
		return true;
	}
}
