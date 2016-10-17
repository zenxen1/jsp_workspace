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
	//1.요청을 받는다.
	//2.요청을 분석한다.
	//3.이 요청을 처리할 비지니스 로직 객체에게 일 시킨다.!
	//4.결과페이지로 가져갈 결과물이 있다면, 결과 저장해 둔다.(메모리)
	//5. 알맞는 뷰 페이지 보여주기
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
