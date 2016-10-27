/*
  공통 관심 사항인 로거 기능을 클래스로 정의해놓고, 
  AOP를 이용하여 필요한 시점에 실행시키자!!
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
	
	//디버깅 메서드 정의 
	public Object printMsg(ProceedingJoinPoint joinPoint){
		Object obj=null;
		//타겟의 본래 로직 수행 전..하고 싶은 코드
		Object target=joinPoint.getTarget();
		String className=target.getClass().getName();
		String methodName=joinPoint.getSignature().getName();
		System.out.println("아무거나");
		try {
			logger.debug(className+"."+methodName+"수행전");//어떤클래스? 어떤 메서드?
			obj=joinPoint.proceed();//타겟의 본래 로직 수행
		} catch (Throwable e) {
			e.printStackTrace();
		}finally{
			logger.debug(className+"."+methodName+"수행후");//어떤클래스? 어떤 메서드?
		}
		//타겟의 본래 로직 수행 후..하고 싶은 코드
		return obj;
	}
}








