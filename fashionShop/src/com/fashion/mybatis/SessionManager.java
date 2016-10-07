/*
 *�������� �����ϴ��ٽ� ��ü�� mybatis������ session�ε� �� session�� ������� ����ġ �ʴ�...
 *���� ������ ���ٽ��� ������ ���� ���� Ŭ������ �����غ���!!!
 * */
package com.fashion.mybatis;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SessionManager {
	//������ ��ȯ���ִ� �޼��� ����!!
	private static SessionManager instance;
	private String path="com/fashion/mybatis/config.xml";//ȯ�漳�� ��������ġ
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
