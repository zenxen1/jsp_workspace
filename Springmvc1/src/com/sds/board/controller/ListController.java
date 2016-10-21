package com.sds.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.sds.board.model.BoardDAO;

public class ListController implements Controller{
	private BoardDAO boardDAO;
	
	//setter 주입 : 의존성을 약하시키기 위해 외부에서 인스턴스를 주입받자!!!
	public void setBoardDAO(BoardDAO boardDAO) {
		this.boardDAO = boardDAO;
	}
	
	public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		System.out.println("리스트 요청을 처리합니다.");
		List list = boardDAO.selelctAll();
		
		//4단계 : 뷰페이지로 가져갈 데이터 저장 !!
		ModelAndView mav=new ModelAndView();
		mav.addObject("list", list); //결과저장
		mav.setViewName("board/list");
	
		return mav;
	}
}
