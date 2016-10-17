package com.sds.mvc.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.mvc.model.BloodAdvice;

public class BloodController extends HttpServlet{
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	//1.��û�� �޴´�.
	//2.��û�� �м��Ѵ�.
	//3.�� ��û�� ó���� �����Ͻ� ���� ��ü���� �� ��Ų��.!
	//4.����������� ������ ������� �ִٸ�, ��� ������ �д�.(�޸�)
	//5. �˸´� �� ������ �����ֱ�
	req.setCharacterEncoding("utf-8");
	String blood = req.getParameter("blood");
	BloodAdvice model = new BloodAdvice();
	String msg = model.getAdvice(blood);
	req.setAttribute("msg", msg);
	
	resp.setContentType("text/html");
	resp.setCharacterEncoding("utf-8");
	RequestDispatcher dis = req.getRequestDispatcher("/blood/result.jsp");
	dis.forward(req, resp);
	
	}
}
