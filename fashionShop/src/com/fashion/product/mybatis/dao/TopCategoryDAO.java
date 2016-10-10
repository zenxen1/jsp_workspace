package com.fashion.product.mybatis.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;
import com.fashion.pool.PoolManager;
import com.fashion.product.domain.TopCategory;

public class TopCategoryDAO {
	SessionManager manager = SessionManager.getInstance();
	
	public List SelectAll(){
		SqlSession session = manager.getSession();
		List list = session.selectList("TopCategory.selectAll");
		session.close();
		return list;
	}
}
