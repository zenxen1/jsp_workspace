package com.sds.model.spring.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sds.model.dao.MemberDAO;
import com.sds.model.domain.Member;

@Repository
public class MemberDAOSpringMybatis implements MemberDAO{

	@Autowired
	private SqlSessionTemplate sessionTemplate;

	@Override
	public List selectAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member select(int member_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Member member) {
		sessionTemplate.insert("Member.insert",member);
		return member.getMember_id();
	}

	@Override
	public int delete(int member_id) {
		// TODO Auto-generated method stub
		return 0;
	}
}
