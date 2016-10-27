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
		
		//���Ͻð� ��û�� ���� æ �����̹Ƿ�, �ٽ� ����Ͻ� ������ ȣ���� ��� �Ѵ�.
		Object taget = joinPoint.getTarget();
		String className=taget.getClass().getName();
		
		String methodName = joinPoint.getSignature().getName();
		
		//Object[] args = joinPoint.getArgs();
		//Board board = (Board)args[0];
		try {
			//logger.debug(className+"��"+methodName+"ȣ����"+args.length+"�ۼ��ڴ�"+board.getWriter());
			obj = joinPoint.proceed(); // �ٽ��ڵ�� �̵�
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			logger.debug(className+"��"+methodName+"ȣ����");
		}
		return obj;
	}
	/*
	public static void main(String[] args){
		new LogTest();
	}
	*/
}
