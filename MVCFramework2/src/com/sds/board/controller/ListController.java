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
	//3�ܰ� �˸��� ����Ͻ� ���� ��ü���� �� ��Ŵ
	BoardDAO boardDAO=new BoardDAO();
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		List list = boardDAO.selelctAll();
		
		//4�ܰ� : ����� �ִٸ� ��� ����
		req.setAttribute("list", list);
		
		/*
		//5�ܰ� : �˸´� ��� ������ �����ֱ�
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
