/*모든 컨트롤러의 역활 
 * 1. 요청을 받는다.
 * 2. 요청을 분석한다.
 * 3. 알맞는 비즈니스 로직 파트에 일 시킨다.
 * 4. 결과가 있다면 결과를 저장해 둔다.(선택)
 * 5. 결과를 알맞는 뷰를 선택하여 보여 준다.
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
		//1.요청을 받는다.
		System.out.println("누군가 컨트롤러 요청을 했군!!");
		
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		String movie = req.getParameter("movie");
		//2.영화에 대한 요청은 분석 생략
		
		//3. 알맞는 비즈니스 로직 객체에 일 시킨다.
		MovieAdvice model = new MovieAdvice();
		String msg = model.getAdvice(movie);
		
		//4. 결과가 있다면 결과를 저장해 둔다..
		req.setAttribute("msg", msg);
		
		//5. 알맞는 뷰를 선택하여 보여준다.
		//PrintWriter out = resp.getWriter();
		//out.print(msg);
		//resp.sendRedirect("/movie/result.jsp");//요청을 끊고 재접
		
		RequestDispatcher dis = req.getRequestDispatcher("/movie/result.jsp");
		dis.forward(req, resp);//전달
	}
}
