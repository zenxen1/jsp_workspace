package com.sds.test;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class MyListner implements ServletContextListener{

	public void contextInitialized(ServletContextEvent e) {
		//System.out.println("저켜져요!!");
		
		//babo라는 이름의 xml을 가져와 보자
		String path = e.getServletContext().getInitParameter("babo");
		System.out.println("서비스용 xml 파일은"+path);
	}
	public void contextDestroyed(ServletContextEvent e) {
		
		
	}


}
