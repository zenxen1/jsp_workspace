package com.fashion.admin.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.fashion.admin.domain.Admin;
import com.fashion.pool.PoolManager;

public class AdminDAO {
	PoolManager pool = PoolManager.getInstance();
	
	public Admin select(Admin admin){
		Connection con =null;
		PreparedStatement pstmt=null;
		ResultSet rs =null;
		Admin dto = null;
		
		con = pool.getConnection();
		String sql ="select * from admin where id=? and password=?";
		System.out.println(admin.getId());
		System.out.println(admin.getPassword());
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, admin.getId());
			pstmt.setString(2, admin.getPassword());
			rs = pstmt.executeQuery();
			if(rs.next()){
				//dto = admin
				dto=new Admin();
				dto.setId(rs.getString("id"));
				dto.setPassword(rs.getString("password"));
				dto.setName(rs.getString("name"));
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}		
		
		return dto;
		
	}
}
