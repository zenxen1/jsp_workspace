package com.sds.notice.dao.copy;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.sds.notice.domain.Notice;
import com.sds.pool.copy.PoolManager;

public class NoticeDAO {
	PoolManager pool = PoolManager.getInstance();
	
	public int insert(Notice dto){
		Connection con= null;
		PreparedStatement pstmt=null;
		int result =0;
		
		try {
			con = pool.getConnection();
			
			String sql = "insert into notice(notice_id, writer, title, content)";
			sql = sql + " values(seq_notice.nextval,?,?,?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			
			result = pstmt.executeUpdate();
	
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
		
	}
	
	//모든 게시물 가져오기
	public List selectAll(){
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		ArrayList<Notice> list = new ArrayList<Notice>();
				
		String sql="select * from notice order by notice_id desc";
		try {
			con = pool.getConnection();
			pstmt = con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Notice dto = new Notice();
				dto.setContent(rs.getString("content"));
				dto.setHit(rs.getInt("hit"));
				dto.setNotice_id(rs.getInt("notice_id"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				
				list.add(dto);
				
			}
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}
	//1건 가져오기
	public Notice select(String notice_id){
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		Notice dto = new Notice();
		
		try {
			con = pool.getConnection();
			String sql = "select * from notice where notice_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, notice_id);
			rs = pstmt.executeQuery();
			
			rs.next();
			dto.setContent(rs.getString("content"));
			dto.setHit(rs.getInt("hit"));
			dto.setNotice_id(rs.getInt("notice_id"));
			dto.setRegdate(rs.getString("regdate"));
			dto.setTitle(rs.getString("title"));
			dto.setWriter(rs.getString("writer"));
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return dto;
		
	}
	
	public int dbdelete(String notice_id){
		Connection con = null;
		PreparedStatement pstmt = null;
		int result =0;
		System.out.println(notice_id);
		try {
			con = pool.getConnection();
			String sql = "delete from notice where notice_id = ?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, Integer.parseInt(notice_id));
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
		
				
		
	}
	public int dbupdate(Notice dto){
		Connection con = null;
		PreparedStatement pstmt = null;
		int result =0;
		
		try {
			con = pool.getConnection();
			String sql = "update notice set writer=?,title=?,content=? where notice_id=?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			pstmt.setInt(4, dto.getNotice_id());
			result = pstmt.executeUpdate();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
		
	}
}
