/*
 * ��2��Ŀ�����, Ŭ���̾�Ʈ�� ��� ��û�� �ϳ��� �������� �ΰ� ó���Ѵ�.
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
		//servletcontext : application�� ������ ������ ��� �ִ� ��ü
		
		String mapping = config.getInitParameter("mapping");
		
		ServletContext application = config.getServletContext();
		String realPath = application.getRealPath(mapping);
		try {
			fis=new FileInputStream(realPath);
			props = new Properties();
			props.load(fis); //������Ƽ����ü�� ��Ʈ�� �ν�
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
		//�Ķ������ ���ڵ� ó��
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		
		//2�ܰ� : ��û�� �м��Ѵ�
		PrintWriter out = resp.getWriter();
		out.print("��ûó���Ϸ�<br>");
		String uri = req.getRequestURI(); // Ŭ���̾�Ʈ�� ��û�Ҷ��� uri
		String className = props.getProperty(uri);
		out.print(uri+"�� ó���� ��Ʈ�ѷ���"+className);
		
		try {
			Class controllerClass = Class.forName(className);
			Controller controller = (Controller)controllerClass.newInstance();
			
			//������Ʈ�ѿ��� 3,4 �ܰ��� ������ ��Ų�� ��� �������� ������ �ǹ��� 
			//���Կ��� �ִ�.!!
			String viewKey = controller.execute(req, resp);
			
			//5�ܰ�: �˸´� �������� �����ֱ�!!
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
