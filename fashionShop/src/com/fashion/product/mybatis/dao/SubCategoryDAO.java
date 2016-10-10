package com.fashion.product.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;

public class SubCategoryDAO {
	SessionManager manager = SessionManager.getInstance();
	public List selecAll(int top_id){
		SqlSession session = manager.getSession();
		List list = session.selectList("SubCategory.selectAll", top_id);
		session.close();
		return list;
	}
}
