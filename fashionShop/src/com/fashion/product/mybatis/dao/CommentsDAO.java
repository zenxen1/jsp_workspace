package com.fashion.product.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;
import com.fashion.product.domain.Comments;

public class CommentsDAO {
	SessionManager manager = SessionManager.getInstance();
	
	public int insert(Comments dto){
		SqlSession session = manager.getSession();
		int result =0;
		result = session.insert("Comments.insert", dto);
		session.commit();
		session.close();
		return result;
	}
	
	public List selelctAll(int product_id){
		SqlSession session = manager.getSession();
		List list = session.selectList("Comments.selectAll",product_id);
		session.close();
		return list;
	}

}
