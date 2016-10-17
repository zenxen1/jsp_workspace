/*
 * MVC ������ �����Ͽ�, ���ø����̼��� ������ ��� ��� ��û���� 1:1 �����ϴ� ��Ʈ�ѷ��� �θ�, ������
 * ������������ ��������.
 * ���� �̹����� �ذ��Ϸ���, ���ø����̼� ���� ��� ��û�� ���� �ϳ��� ���������� ������, �ϳ��� ��Ʋ�ѷ�
 * �� ����ϰ� ó���ϰ� ����...
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
	
	//������ �¾��, ���ϱ� ������ �ѹ� �ʱ�ȭ�� ȣ���...
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

	// get or post �������� ��������, �� �޼��忡�� �������� ��û�� ó������!!
	protected void doRequest(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter out = res.getWriter();
		out.print("��û�� ���Գ׿�!!<br>");

		// 2�ܰ� : Ŭ���̾�Ʈ�� ��û�� �м��Ѵ�
		String uri = req.getRequestURI();
		out.print(uri + "<br>");

		/*
		 * ���� ��Ʈ�ѷ��� �ڵ� �̵� if(uri.equals("/movie.do")){
		 * 
		 * //3�ܰ� : ��ȭó�� �� ��ü�� �� ��Ų�� MovieAdvice model = new MovieAdvice();
		 * String movie=req.getParameter("movie"); String msg =
		 * model.getAdvice(movie);
		 * 
		 * //4�ܰ� : ��� ���� req.setAttribute("msg", msg); //5�ܰ� : �˸´� �� ������ �����ֱ�
		 * RequestDispatcher dis =
		 * req.getRequestDispatcher("/movie/result.jsp"); dis.forward(req, res);
		 * 
		 * MovieController controller = new MovieController();
		 * controller.execute(req, res);
		 * 
		 * }else if(uri.equals("/blood.do")){
		 * 
		 * //3�ܰ� : ������ ó�� �� ��ü�� �� ��Ų�� BloodAdvice model=new BloodAdvice();
		 * String blood=req.getParameter("blood"); String msg =
		 * model.getAdvice(blood);
		 * 
		 * //4�ܰ� : ��� ���� req.setAttribute("msg", msg); //5�ܰ� : �˸´� �� ������ �����ֱ�
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
