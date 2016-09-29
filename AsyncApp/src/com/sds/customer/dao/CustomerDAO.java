package com.sds.customer.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.customer.domain.Customer;
import com.sds.mypool.PoolManager;
import com.sds.zipcode.domain.zipcode;

public class CustomerDAO {
	PoolManager pool=PoolManager.getInstance();
	
	//아이디 중복 체크 
	public boolean isExist(String id){
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		boolean result=false;
		
		con=pool.getConnection();
		String sql="select * from customer where id=?";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, id);
			rs=pstmt.executeQuery();
			result=rs.next();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return result;
	}
	
	//회원 등록 
	public int regist(Customer dto){
		int result =0;
		Connection con = null;
		PreparedStatement pstmt =null;
		
		con = pool.getConnection();
		
		String sql = "insert into CUSTOMER (CUSTOMER_ID, ID, PASSWORD, ZIPCODE1, ZIPCODE2, ADDR1, ADDR2)";
		sql = sql + " values (seq_customer.nextval,?,?,?,?,?,?)"; 
		
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getId());
			pstmt.setString(2, dto.getPassword());
			pstmt.setString(3, dto.getZipcode1());
			pstmt.setString(4, dto.getZipcode2());
			pstmt.setString(5, dto.getAddr1());
			pstmt.setString(6, dto.getAddr2());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		
		return result;
	}
	
	public List selectAll(){
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<Customer> list = new ArrayList<Customer>();
		
		String sql = "select * from customer order by customer_id desc";
		con = pool.getConnection();
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				Customer dto = new Customer();
				dto.setCustomer_id(rs.getInt("customer_id"));
				dto.setId(rs.getString("id"));
				dto.setPassword(rs.getString("password"));
				dto.setZipcode1(rs.getString("zipcode1"));
				dto.setZipcode2(rs.getString("zipcode2"));
				dto.setAddr1(rs.getString("addr1"));
				dto.setAddr2(rs.getString("addr2"));
				dto.setRegdate(rs.getString("regdate"));
				
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
	
	public void postSerch(){
		Connection con=null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		con = pool.getConnection();
		String sql = "select * from post where dong like '%구%'";
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				zipcode dto = new zipcode();
				dto.setBunji(rs.getString("bunji");
				dto.setDong(rs.getString("dong");
				dto.setGugun(rs.getString("gugun");
				dto.setSeq(seq);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
}



















