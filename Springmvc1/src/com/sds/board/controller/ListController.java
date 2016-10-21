package com.sds.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.sds.board.model.BoardDAO;

public class ListController implements Controller{
	private BoardDAO boardDAO;
	
	//setter ���� : �������� ���Ͻ�Ű�� ���� �ܺο��� �ν��Ͻ��� ���Թ���!!!
	public void setBoardDAO(BoardDAO boardDAO) {
		this.boardDAO = boardDAO;
	}
	
	public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		System.out.println("����Ʈ ��û�� ó���մϴ�.");
		List list = boardDAO.selelctAll();
		
		//4�ܰ� : ���������� ������ ������ ���� !!
		ModelAndView mav=new ModelAndView();
		mav.addObject("list", list); //�������
		mav.setViewName("board/list");
	
		return mav;
	}
}
