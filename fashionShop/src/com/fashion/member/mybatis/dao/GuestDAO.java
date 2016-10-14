package com.fashion.member.mybatis.dao;

import org.apache.ibatis.session.SqlSession;

import com.fashion.member.domain.Guest;
import com.fashion.mybatis.SessionManager;

public class GuestDAO {
	SessionManager manager = SessionManager.getInstance();
	
	public int insert(Guest dto){
		SqlSession session = manager.getSession();
		int result=0;
	
		session.insert("Guest.insert",dto);
		System.out.println("after"+dto.getGuest_id());
		result=dto.getGuest_id();
		session.commit();
		session.close();
		return result;
	}
}
