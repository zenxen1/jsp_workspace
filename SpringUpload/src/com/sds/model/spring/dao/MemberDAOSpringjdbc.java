/*
 * ���ݱ����� �������� MVC ���Ͽ� ������ Spring MVC���� ��Դ�..������ �������� ��������������� �� ��������
 * �ʿ�� �ϴ� ������� ������ �ش�..
 * ������ �������� ������ ���̽� ���� ����� �н��غ���!!!
 * JDBC, --> �������� �����ϴ� jdbc 
 * ibatis / mybatis --> �������� �����Ѵ� mybatis
 * hibernate
 * JPA
 * JTA
 * 
 * ����) �������� �����ϴ� DB���� ��� ����� ���û����̳�,,, 
 *       ���� ( ������ xml, ������̼� ���@ )Ʈ������� ������ ���� �� �ִ�. 
 * */

package com.sds.model.spring.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.sds.model.dao.MemberDAO;
import com.sds.model.domain.Member;

@Repository
public class MemberDAOSpringjdbc implements MemberDAO{
	
	/*jdbcTemplate�� �̿��ϸ� ������ jdbc �ڵ��� ȿ���� ����������, �����ڰ� ������ 
	 * Connection */
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List selectAll() {
		return null;
	}

	public Member select(int member_id) {
		return null;
	}

	public int insert(Member member) {
		String sql = "insert into member(member_id,id,password,profile)";
		sql = sql + " values(seq_member.nextval,?,?,?)";
		
		int result = jdbcTemplate.update(sql,member.getId(),member.getPassword(),member.getProfile());
		
		//���� ���������� �߻��� primary key ���
		if(result!=0){
			sql = "select seq_member.currval as member_id from dual";
			result=jdbcTemplate.queryForObject(sql, Integer.class);
		}
		
		return result;
	}

	public int delete(int member_id) {
		return 0;
	}

}
