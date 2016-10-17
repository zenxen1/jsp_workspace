/*
 * MVC 패턴을 적용하여, 어플리케이션을 개발할 경우 모든 요청마다 1:1 대응하는 컨트롤러를 두면, 오히려
 * 유지보수성이 떨어진다.
 * 따라서 이문제를 해결하려면, 어플리케이션 내의 모든 요청은 오직 하나의 진입점으로 몰아져, 하나의 컨틀롤러
 * 가 담당하게 처리하게 하자...
 * */
package com.sds.controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Properties;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.model.BloodAdvice;
import com.sds.model.MovieAdvice;

public class DispatcherServlet extends HttpServlet {
	FileInputStream fis;
	Properties props;
	
	//서블릿이 태어나서, 일하기 직전에 한번 초기화시 호출됨...
	public void init(ServletConfig config) throws ServletException {
		ServletContext context =  config.getServletContext();
		String realPath = context.getRealPath("/WEB-INF/mapping.data");
		System.out.println(realPath);
		try {
			fis = new FileInputStream(realPath);
			props = new Properties();
			props.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		doRequest(req, res);
	}

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		doRequest(req, res);
	}

	// get or post 어떤방식으로 들어오던지, 이 메서드에서 실제적인 요청을 처리하자!!
	protected void doRequest(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter out = res.getWriter();
		out.print("요청이 들어왔네요!!<br>");

		// 2단계 : 클라이언트의 요청을 분석한다
		String uri = req.getRequestURI();
		out.print(uri + "<br>");

		/*
		 * 보조 컨트롤러로 코드 이동 if(uri.equals("/movie.do")){
		 * 
		 * //3단계 : 영화처리 모델 객체에 일 시킨다 MovieAdvice model = new MovieAdvice();
		 * String movie=req.getParameter("movie"); String msg =
		 * model.getAdvice(movie);
		 * 
		 * //4단계 : 결과 저장 req.setAttribute("msg", msg); //5단계 : 알맞는 뷰 페이지 보여주기
		 * RequestDispatcher dis =
		 * req.getRequestDispatcher("/movie/result.jsp"); dis.forward(req, res);
		 * 
		 * MovieController controller = new MovieController();
		 * controller.execute(req, res);
		 * 
		 * }else if(uri.equals("/blood.do")){
		 * 
		 * //3단계 : 혈액형 처리 모델 객체에 일 시킨다 BloodAdvice model=new BloodAdvice();
		 * String blood=req.getParameter("blood"); String msg =
		 * model.getAdvice(blood);
		 * 
		 * //4단계 : 결과 저장 req.setAttribute("msg", msg); //5단계 : 알맞는 뷰 페이지 보여주기
		 * RequestDispatcher dis =
		 * req.getRequestDispatcher("/blood/result.jsp"); dis.forward(req, res);
		 * 
		 * BloodController controller = new BloodController();
		 * controller.execute(req, res);
		 * 
		 * }
		 */
		/*
		 * if(uri.equals("/movie.do")){
		 * 
		 * MovieController controller = new MovieController();
		 * controller.execute(req, res);
		 * 
		 * }else if(uri.equals("/blood.do")){
		 * 
		 * BloodController controller = new BloodController();
		 * controller.execute(req, res);
		 * 
		 * }
		 */
		/*
		Controller controller = null;
		if (uri.equals("/movie.do")) {

			// controller = new MovieController();
			try {

				Class controllerClass = Class.forName("com.sds.controller.MovieController");

				controller = (Controller) controllerClass.newInstance();

			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}

		} else if (uri.equals("/blood.do")) {

			// controller = new BloodController();
			try {

				Class controllerClass = Class.forName("com.sds.controller.BloodController");
				controller = (Controller) controllerClass.newInstance();

			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}

		}
		*/
		Controller controller = null;
		String controllerName=props.getProperty(uri);
		try {
			Class myClass = Class.forName(controllerName);
			controller =(Controller)myClass.newInstance();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		controller.execute(req, res);

	}

}
