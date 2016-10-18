package com.sds.board.controller;

import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Request;
import org.apache.catalina.ha.session.SessionMessage;
import org.apache.ibatis.session.SqlSession;

import com.sds.board.domain.Board;
import com.sds.board.model.BoardDAO;
import com.sds.controller.Controller;

public class DetailController implements Controller{
	BoardDAO boardDAO = new BoardDAO();
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		String board_id = req.getParameter("board_id");
		
		Board board = boardDAO.selelctOne(Integer.parseInt(board_id));
		
		//4단계
		req.setAttribute("board", board);
		
		return "/board/view/detail";
		
		/*
		//5단계
		
		
		RequestDispatcher dis = req.getRequestDispatcher("/board/detail.jsp");
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
	}
	
	public boolean isForward() {
		
		return true; //요청을 유지하자
	}
	
}
