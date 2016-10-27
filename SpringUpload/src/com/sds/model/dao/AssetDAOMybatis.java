package com.sds.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sds.model.connection.SessionManager;
import com.sds.model.domain.Asset;

@Repository
public class AssetDAOMybatis implements AssetDAO{
	@Autowired
	private SessionManager manager;

	public List selectAll() {
		return null;
	}

	public Asset select(int Asset_id) {
		return null;
	}

	public int insert(Asset Asset) {
		SqlSession session = manager.getSession();
		session.insert("Asset.insert", Asset);
		session.commit();
		session.close();
		return 0;
	}

	public int delete(int Asset_id) {
		return 0;
	}

}
