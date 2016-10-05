package com.fashion.product.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.fashion.mypool.PoolManager;
import com.fashion.product.domain.SubCategory;
import com.fashion.product.domain.TopCategory;

public class SubCategoryDAO {
PoolManager pool = PoolManager.getInstance();
	
	public List SelectAll(int top_id){
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List list = new ArrayList<SubCategory>();
		
		con = pool.getConnection();
		String sql = "select * from subcategory where top_id =? order by rank asc";
		
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, top_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				SubCategory dto = new SubCategory();
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
