package com.sds.model.spring.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sds.model.dao.AssetDAO;
import com.sds.model.domain.Asset;

@Repository
public class AssetDAOSpringMybatis implements AssetDAO{
	
	@Autowired
	private SqlSessionTemplate sessionTemplate;

	@Override
	public List selectAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Asset select(int Asset_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Asset Asset) {
		int result = sessionTemplate.insert("Asset.insert",Asset);
		return result;
	}

	@Override
	public int delete(int Asset_id) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	
}
