package com.sds.exception.spring;

import org.springframework.dao.DataAccessException;

public class WriteException extends DataAccessException{
	
	public WriteException(String msg) {
		super(msg);
		// TODO Auto-generated constructor stub
	}
	
	public WriteException(String msg, Throwable e) {
		super(msg, e);
		// TODO Auto-generated constructor stub
	}

	
	
	

}
