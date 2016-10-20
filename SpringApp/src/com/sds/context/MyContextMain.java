/*�������� ��ȭ��Ű�� ����, �� ��ü�� ���յ��� ���߱� ����,
 * 1. ��ü�� �ֻ��� �ڷ����� ����
 * 2. ��ü�� ������ �ڹ� �ڵ峻���� ���� �ʰ�, �ܺ��� ���� ������ �̿�
 * ��ü�� ����� ������ �ܺμ��� ������ �ε��ؾ� ��ü�� �ν��Ͻ����� �޸𸮿� �ö󰡹Ƿ�,
 * �� �۾��� ���� 
 * */
package com.sds.context;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sds.cook.Chef;

public class MyContextMain {
	

	public static void main(String[] args) {
		
		//xml�� �ؼ��Ͽ� �׾ȿ� ����� ��ü���� �޸𸮿� �÷��� �������ִ� ��ü!!!
		//�Ʒ��� applicationcontext ������ ȣ��� �ν��ϵ��� �޸𸮿� �ö󰣴�...
		
		ClassPathXmlApplicationContext context = null;
		context = new ClassPathXmlApplicationContext("com/sds/context/config.xml");
		
		System.out.println(context);
		
		Chef chef=(Chef)context.getBean("chef");
		chef.cook();

	}

}
