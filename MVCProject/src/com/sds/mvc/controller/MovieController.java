/*��� ��Ʈ�ѷ��� ��Ȱ 
 * 1. ��û�� �޴´�.
 * 2. ��û�� �м��Ѵ�.
 * 3. �˸´� ����Ͻ� ���� ��Ʈ�� �� ��Ų��.
 * 4. ����� �ִٸ� ����� ������ �д�.(����)
 * 5. ����� �˸´� �並 �����Ͽ� ���� �ش�.
 * 
 * */

package com.sds.mvc.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.mvc.model.MovieAdvice;

public class MovieController extends HttpServlet{
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//1.��û�� �޴´�.
		System.out.println("������ ��Ʈ�ѷ� ��û�� �߱�!!");
		
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		String movie = req.getParameter("movie");
		//2.��ȭ�� ���� ��û�� �м� ����
		
		//3. �˸´� ����Ͻ� ���� ��ü�� �� ��Ų��.
		MovieAdvice model = new MovieAdvice();
		String msg = model.getAdvice(movie);
		
		//4. ����� �ִٸ� ����� ������ �д�..
		req.setAttribute("msg", msg);
		
		//5. �˸´� �並 �����Ͽ� �����ش�.
		//PrintWriter out = resp.getWriter();
		//out.print(msg);
		//resp.sendRedirect("/movie/result.jsp");//��û�� ���� ����
		
		RequestDispatcher dis = req.getRequestDispatcher("/movie/result.jsp");
		dis.forward(req, resp);//����
	}
}
