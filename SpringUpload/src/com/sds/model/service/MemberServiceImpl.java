package com.sds.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.sds.model.dao.AssetDAO;
import com.sds.model.dao.MemberDAO;
import com.sds.model.domain.Asset;
import com.sds.model.domain.Member;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	/*@Qualifier("memberDAOSpringjdbc")*/
	@Qualifier("memberDAOSpringMybatis")
	private MemberDAO memberDAO;

	@Autowired
	/*@Qualifier("assetDAOSpringJdbc")*/
	@Qualifier("assetDAOSpringMybatis")
	private AssetDAO assetDAO;
	
	public int regist(Member member) {
		int member_id = memberDAO.insert(member);
		Asset asset = member.getAsset();
		asset.setMember_id(member_id);
		int result = assetDAO.insert(asset);
		
		return result;
	}

	@Override
	public int delete(int member_id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(Member member) {
		// TODO Auto-generated method stub
		return 0;
	}

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
	
}
