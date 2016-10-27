package com.sds.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sds.model.connection.SessionManager;
import com.sds.model.domain.Member;

//���������� ����� ������Ʈ �����̾��, scan ����� �ȴ�!! dao�� ����о߿��� repository��� �θ���..
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
