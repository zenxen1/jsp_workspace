package com.sds.common.logging;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;

import com.sds.domain.Board;

public class ControllerLog {
	
	Logger logger = LogManager.getLogger(ControllerLog.class);
	//debug < info < warn < error < fatal
	
	public Object printMsg(ProceedingJoinPoint joinPoint) {
		Object obj=null;
		
		//프록시가 요청을 낚아 챈 상태이므로, 핵심 비즈니스 로직을 호출해 줘야 한다.
		Object taget = joinPoint.getTarget();
		String className=taget.getClass().getName();
		
		String methodName = joinPoint.getSignature().getName();
		
		//Object[] args = joinPoint.getArgs();
		//Board board = (Board)args[0];
		try {
			//logger.debug(className+"의"+methodName+"호출전"+args.length+"작성자는"+board.getWriter());
			obj = joinPoint.proceed(); // 핵심코드로 이동
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			logger.debug(className+"의"+methodName+"호출후");
		}
		return obj;
	}
	/*
	public static void main(String[] args){
		new LogTest();
	}
	*/
}
