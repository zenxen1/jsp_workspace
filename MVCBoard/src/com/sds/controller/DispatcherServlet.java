package com.sds.controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
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
		String mapping = config.getInitParameter("mapping");
		
		ServletContext application = config.getServletContext();
		String realPath = application.getRealPath(mapping);
		try {
			fis = new FileInputStream(realPath);
			props = new Properties();
			props.load(fis);
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
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
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		
		//분석시작
		String uri = req.getRequestURI();
		String className=props.getProperty(uri);
		
		try {
			Class controllerClass = Class.forName(className);
			Controller controller = (Controller)controllerClass.newInstance();
			
			String viewKey = controller.execute(req, resp);
			
			//5단계
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
	
	public void destroy(){
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
