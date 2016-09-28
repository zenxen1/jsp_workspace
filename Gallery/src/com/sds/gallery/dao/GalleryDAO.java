package com.sds.gallery.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.gallery.domain.Gallery;
import com.sds.mypool.PoolManager;

public class GalleryDAO {
	PoolManager pool = PoolManager.getInstance();
	
	public int insert(Gallery dto){
		Connection con=null;
		PreparedStatement pstmt = null;
		int result = 0;
		con = pool.getConnection();
		String sql="insert into gallery (gallery_id, writer,title,content,img) values(seq_gallery.nextval,?,?,?,?)";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());
			pstmt.setString(4, dto.getImg());
			
			
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
		Connection con=null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		con = pool.getConnection();
		ArrayList<Gallery> list = new ArrayList<>();
		
		
		String sql = "select * from gallery order by gallery_id desc";
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
			Gallery dto = new Gallery();
			dto.setTitle(rs.getString("title"));
			dto.setWriter(rs.getString("writer"));
			dto.setImg(rs.getString("img"));
			dto.setRegdate(rs.getString("regdate"));
			dto.setGallery_id(rs.getInt("gallery_id"));
			dto.setContent(rs.getString("content"));
			dto.setHit(rs.getInt("hit"));
			
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
	public Gallery select(int gallery_id){
		Connection con=null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		con = pool.getConnection();
	
		
		
		String sql = "select * from gallery where gallery_id ="+gallery_id;
		Gallery dto = new Gallery();
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			if(rs.next()){
			dto.setTitle(rs.getString("title"));
			dto.setWriter(rs.getString("writer"));
			dto.setImg(rs.getString("img"));
			dto.setRegdate(rs.getString("regdate"));
			dto.setGallery_id(rs.getInt("gallery_id"));
			dto.setContent(rs.getString("content"));
			dto.setHit(rs.getInt("hit"));
			
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return dto;
		
	}
	
	public int gallery_delete(int gallery_id){
		Connection con=null;
		PreparedStatement pstmt =null;
		int result = 0;
		con = pool.getConnection();
		String sql = "delete from gallery where gallery_id ="+gallery_id;
		try {
			pstmt = con.prepareStatement(sql);
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}		
		return result;
	}
}
