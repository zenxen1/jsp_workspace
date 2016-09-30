package com.sds.zipcode.domain;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.mypool.PoolManager;
import com.sds.zipcode.dao.ZipCode;

public class ZipcodeDAO {
	PoolManager pool = PoolManager.getInstance();
	
	public int insert(ZipCode dto){
		Connection con=null;
		PreparedStatement pstmt = null;
		int result =0;
		con = pool.getConnection();

		String sql = "insert into ZIPCODE (ZIPCODE, SIDO, GUGUN, DONG, BUNJI, SEQ)";
				sql = sql +" values (?,?,?,?,?,?)";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getZipcode());
			pstmt.setString(2, dto.getSido());
			pstmt.setString(3, dto.getGugun());
			pstmt.setString(4, dto.getDong());
			pstmt.setString(5, dto.getBunji());
			pstmt.setInt(6, dto.getSeq());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
		
	}
	
	public List selectAll(String dong){
		Connection con=null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<ZipCode> list = new ArrayList<>();
		
		con = pool.getConnection();
		
		System.out.println(dong);
		String sql = "select * from zipcode where dong like '%'||?||'%'";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dong);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				ZipCode dto = new ZipCode();
				dto.setBunji(rs.getString("bunji"));
				dto.setDong(rs.getString("dong"));
				dto.setGugun(rs.getString("gugun"));
				dto.setSeq(rs.getInt("seq"));
				dto.setSido(rs.getString("sido"));
				dto.setZipcode(rs.getString("zipcode"));
				
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
