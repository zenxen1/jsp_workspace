package com.fashion.product.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;
import com.fashion.product.domain.EventInfo;

public class EventInfoDAO {
	SessionManager manager = SessionManager.getInstance();
	
	public List selectAll(){
		SqlSession session = manager.getSession();
		List <EventInfo> list = session.selectList("EventInfo.selectAll");
		session.close();
		return list;
	}
	
}
