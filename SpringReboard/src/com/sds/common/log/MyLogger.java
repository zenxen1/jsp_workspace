/*
  ���� ���� ������ �ΰ� ����� Ŭ������ �����س���, 
  AOP�� �̿��Ͽ� �ʿ��� ������ �����Ű��!!
*/
package com.sds.common.log;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;

public class MyLogger {
	Logger logger;
	
	public MyLogger() {
		logger = LogManager.getLogger(this.getClass().getName());
	}
	
	//����� �޼��� ���� 
	public Object printMsg(ProceedingJoinPoint joinPoint){
		Object obj=null;
		//Ÿ���� ���� ���� ���� ��..�ϰ� ���� �ڵ�
		Object target=joinPoint.getTarget();
		String className=target.getClass().getName();
		String methodName=joinPoint.getSignature().getName();
		System.out.println("�ƹ��ų�");
		try {
			logger.debug(className+"."+methodName+"������");//�Ŭ����? � �޼���?
			obj=joinPoint.proceed();//Ÿ���� ���� ���� ����
		} catch (Throwable e) {
			e.printStackTrace();
		}finally{
			logger.debug(className+"."+methodName+"������");//�Ŭ����? � �޼���?
		}
		//Ÿ���� ���� ���� ���� ��..�ϰ� ���� �ڵ�
		return obj;
	}
}








