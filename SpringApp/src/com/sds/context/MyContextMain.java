/*의존성을 약화시키기 위해, 즉 객체간 결합도를 낮추기 위해,
 * 1. 객체의 최상위 자료형을 정의
 * 2. 객체의 생성을 자바 코드내에서 하지 않고, 외부의 설정 파일을 이용
 * 객체의 명단을 보유한 외부설정 파일을 로드해야 객체의 인스턴스들이 메모리에 올라가므로,
 * 이 작업을 진행 
 * */
package com.sds.context;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sds.cook.Chef;

public class MyContextMain {
	

	public static void main(String[] args) {
		
		//xml을 해석하여 그안에 기재된 객체들을 메모리에 올려서 관리해주는 주체!!!
		//아래의 applicationcontext 생성자 호출시 인스턴들이 메모리에 올라간다...
		
		ClassPathXmlApplicationContext context = null;
		context = new ClassPathXmlApplicationContext("com/sds/context/config.xml");
		
		System.out.println(context);
		
		Chef chef=(Chef)context.getBean("chef");
		chef.cook();

	}

}
