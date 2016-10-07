/*
 *쿼리문을 수행하는핵심 객체가 mybatis에서는 session인데 이 session을 얻어오기란 만만치 않다...
 *따라서 세션을 보다쉽게 얻어오기 위한 전용 클래스를 제작해보자!!!
 * */
package com.fashion.mybatis;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SessionManager {
	//세션을 반환해주는 메서드 정의!!
	private static SessionManager instance;
	private String path="com/fashion/mybatis/config.xml";//환경설정 파일의위치
	private InputStream is;
	private SqlSessionFactory factory;
	private SessionManager() {
		try {
			is = Resources.getResourceAsStream(path);
			factory = new SqlSessionFactoryBuilder().build(is);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static SessionManager getInstance() {
		if(instance==null){
			instance=new SessionManager();
		}
		return instance;
	}
	
	public SqlSession getSession(){
		SqlSession session =null;
		session=factory.openSession();
		return session;
	}
}
