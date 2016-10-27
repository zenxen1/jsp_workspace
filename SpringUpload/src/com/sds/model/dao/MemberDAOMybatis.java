package com.sds.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sds.model.connection.SessionManager;
import com.sds.model.domain.Member;

//스프링에서 명시한 컴포넌트 유형이어야, scan 대상이 된다!! dao는 설계분야에서 repository라고도 부른다..
@Repository
public class MemberDAOMybatis implements MemberDAO{
	
	@Autowired
	private SessionManager manager;

	public List selectAll() {
		return null;
	}

	public Member select(int member_id) {
		return null;
	}

	public int insert(Member member) {
		System.out.println("manager is"+ manager);
		SqlSession session = manager.getSession();
		int result = session.insert("Member.insert", member);
		//session.insert("Asset.inset",)
		session.commit();
		session.close();
		return 0;
	}

	public int delete(int member_id) {
		return 0;
	}
	
}
