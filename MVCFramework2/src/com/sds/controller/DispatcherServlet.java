/*
 * 모델2방식에서는, 클라이언트의 모든 요청은 하나의 진입점을 두고 처리한다.
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

public class DispatcherServlet extends HttpServlet{
	FileInputStream fis;
	Properties props;
	
	public void init(ServletConfig config) throws ServletException {
		//servletcontext : application의 전역적 정보를 담고 있는 객체
		
		String mapping = config.getInitParameter("mapping");
		
		ServletContext application = config.getServletContext();
		String realPath = application.getRealPath(mapping);
		try {
			fis=new FileInputStream(realPath);
			props = new Properties();
			props.load(fis); //프로퍼티스객체에 스트림 인식
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doRequest(req, resp);
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doRequest(req, resp);
	}
	
	protected void doRequest(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//파라미터의 인코딩 처리
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		
		//2단계 : 요청을 분석한다
		PrintWriter out = resp.getWriter();
		out.print("요청처리완료<br>");
		String uri = req.getRequestURI(); // 클라이언트가 요청할때의 uri
		String className = props.getProperty(uri);
		out.print(uri+"를 처리할 컨트롤러는"+className);
		
		try {
			Class controllerClass = Class.forName(className);
			Controller controller = (Controller)controllerClass.newInstance();
			
			//동생컨트롤에게 3,4 단게의 업무를 시킨후 결과 페이지를 보여줄 의무는 
			//형님에게 있다.!!
			String viewKey = controller.execute(req, resp);
			
			//5단계: 알맞는 뷰페이지 보여주기!!
			String viewPage = props.getProperty(viewKey);
			
			if(controller.isForward()){
				RequestDispatcher dis = req.getRequestDispatcher(viewPage);
				dis.forward(req, resp);
			}else{
				resp.sendRedirect(viewPage);
			}
			
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Override
	public void destroy() {
		if(fis!=null){
			try {
				fis.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
