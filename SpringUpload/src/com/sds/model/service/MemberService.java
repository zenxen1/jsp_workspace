/*
 * 1. Ʈ����� ó��
 * 2. �� ����Ͻ� ���� ��ü�� �������� �����ϱ� ����
*/
package com.sds.model.service;

import java.util.List;

import com.sds.model.dao.AssetDAO;
import com.sds.model.dao.MemberDAO;
import com.sds.model.domain.Asset;
import com.sds.model.domain.Member;

public interface MemberService {
	//����
	public int regist(Member member);
	public int delete(int member_id);
	public int update(Member member);
	public List selectAll();
	public Member select(int member_id);
	
	
	
	
	
	/*	MemberDAO memberDAO;
	AssetDAO assetDAO;
	
	//����
	public int regist(Member member, Asset asset){
		int result=0;
		memberDAO.insert(member);
		assetDAO.insert(asset);
		
		return result;
	}
*/}
