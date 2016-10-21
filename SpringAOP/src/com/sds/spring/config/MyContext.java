package com.sds.spring.config;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sds.military.Soldier;

public class MyContext {

	public static void main(String[] args) {
		String path="com/sds/spring/config/context.xml";
		ClassPathXmlApplicationContext context = null;
		context = new ClassPathXmlApplicationContext(path);
		
		Soldier soldier = (Soldier)context.getBean("soldier");
		
		soldier.getUP();
		soldier.sleep();
	}

}
