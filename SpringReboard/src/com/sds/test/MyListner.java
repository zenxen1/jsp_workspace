package com.sds.test;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class MyListner implements ServletContextListener{

	public void contextInitialized(ServletContextEvent e) {
		//System.out.println("��������!!");
		
		//babo��� �̸��� xml�� ������ ����
		String path = e.getServletContext().getInitParameter("babo");
		System.out.println("���񽺿� xml ������"+path);
	}
	public void contextDestroyed(ServletContextEvent e) {
		
		
	}


}
