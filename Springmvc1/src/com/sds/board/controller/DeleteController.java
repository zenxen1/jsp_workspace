package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.sds.board.model.BoardDAO;

public class DeleteController implements Controller{
	private BoardDAO boardDAO;
	
	public DeleteController(BoardDAO boardDAO) {
		this.boardDAO = boardDAO;
	}
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		// TODO Auto-generated method stub
		String board_id = req.getParameter("board_id");
		boardDAO.delete(Integer.parseInt(board_id));
		
		//�������� default ������ forword true�� �Ǿ��ֱ� ������ send redirect ȿ���� ������, ������ String ǥ��..
		ModelAndView mav = new ModelAndView();
		mav.setViewName("redirect:/board/list.do");
		
		return mav;
	}
}
