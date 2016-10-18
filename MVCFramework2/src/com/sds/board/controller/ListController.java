package com.sds.board.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.board.model.BoardDAO;
import com.sds.controller.Controller;

public class ListController implements Controller{
	//3단계 알맞은 비즈니스 로직 객체에게 일 시킴
	BoardDAO boardDAO=new BoardDAO();
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		List list = boardDAO.selelctAll();
		
		//4단계 : 결과가 있다면 결과 저장
		req.setAttribute("list", list);
		
		/*
		//5단계 : 알맞는 결과 페이지 보여주기
		RequestDispatcher dis = req.getRequestDispatcher("/board/list.jsp");
		try {
			dis.forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		return "/board/view/list";
	}
	public boolean isForward() {
		
		return true;
	}
}
