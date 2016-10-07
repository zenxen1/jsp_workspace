package com.fashion.product.jdbc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.fashion.pool.PoolManager;
import com.fashion.product.domain.TopCategory;

public class TopCategoryDAO {
	PoolManager pool = PoolManager.getInstance();
	
	public List SelectAll(){
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List list = new ArrayList<TopCategory>();
		
		con = pool.getConnection();
		String sql = "select * from topcategory order by top_id asc";
		
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				TopCategory dto = new TopCategory();
				dto.setTop_id(rs.getInt("top_id"));
				dto.setTitle(rs.getString("title"));
				dto.setRank(rs.getInt("rank"));
				
				list.add(dto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		
		return list;
	}
}
