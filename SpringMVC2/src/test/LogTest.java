package test;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;

public class LogTest {
	
	Logger logger = LogManager.getLogger(this.getClass());
	
	public Object printMsg(ProceedingJoinPoint joinPoint) {
		Object obj=null;
		logger.debug("��ȣ");
		
		//���� �����ϰ��� �ߴ� �� ���� �����ض�~~~
		try {
			joinPoint.proceed();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return obj;
	}
	/*
	public static void main(String[] args){
		new LogTest();
	}
	*/
}
