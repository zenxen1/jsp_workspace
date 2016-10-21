package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.sds.board.domain.Board;
import com.sds.board.model.BoardDAO;

public class EditController implements Controller{
	private BoardDAO boardDAO;
	
	public void setBoardDAO(BoardDAO boardDAO) {
		this.boardDAO = boardDAO;
	}
	@Override
	public ModelAndView handleRequest(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		
		req.setCharacterEncoding("utf-8");
		Board board = new Board();
		
		board.setBoard_id(Integer.parseInt(req.getParameter("board_id")));
		board.setContent(req.getParameter("content"));
		board.setTitle(req.getParameter("title"));
		board.setWriter(req.getParameter("writer"));
		
		
		boardDAO.update(board);
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("board",board);
		mav.setViewName("board/detail");
		
		
		return mav;
	}
}
