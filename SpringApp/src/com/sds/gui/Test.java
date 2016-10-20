package com.sds.gui;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		String path ="com/sds/context/config.xml";
		
		ClassPathXmlApplicationContext context = null;
		context = new ClassPathXmlApplicationContext(path);
		
		MyFrame myFrame = (MyFrame)context.getBean("myFrame");
		myFrame.init();
		
	}

}
