/*
 * 
 * */
package com.fashion.product.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.mybatis.SessionManager;
import com.fashion.product.domain.Product;
	
public class ProductDAO {
	SessionManager manager = SessionManager.getInstance();
	public int insert(Product dto){
		int result=0;
		return result;
	}
	
	public List selectAll(){
		SqlSession session = manager.getSession();
		List list = null;
		
		list = (List)session.selectList("Product.selectAll");
		session.close();
		return list;
	}
	
	public List selectBySubId(int sub_id){
		SqlSession session = manager.getSession();
		List list =(List)session.selectList("Product.selectBySubId", sub_id);
		session.close();
		return list;
	}
	
	public Product select(int product_id){
		SqlSession session = manager.getSession();
		Product product=session.selectOne("Product.select", product_id);
		session.close();
		
	return product;	
	}
	
	public List selectByEventInfoId(int eventinfo_id){
		SqlSession session = manager.getSession();
		List list = null;
		
		list = (List)session.selectList("Product.selectByEventInfoId",eventinfo_id);
		session.close();
		return list;
	} 
}
