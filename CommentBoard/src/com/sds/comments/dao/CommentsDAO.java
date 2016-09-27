package com.sds.comments.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.comments.domain.Comments;
import com.sds.mypool.PoolManager;

public class CommentsDAO {
	PoolManager pool = PoolManager.getInstance();
	//댓글 1건 등록
	public int insert(Comments dto){
	
		Connection con = null;
		PreparedStatement pstmt = null;
		int result =0;
		
		con = pool.getConnection();
		String sql = "insert into comments(comments_id,board_id,writer,title)";
		sql = sql + " values (seq_comments.nextval, ?,?,?)";
		
		System.err.println(Integer.toString(dto.getBoard_id()));
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, dto.getBoard_id());
			pstmt.setString(2, dto.getWriter());
			pstmt.setString(3, dto.getTitle());
			
			result = pstmt.executeUpdate();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
				
	return result;
	}
	
	//모든 댓글 가져오기
	public List selectAll(int board_id){
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		ArrayList<Comments> list = new ArrayList<Comments>();
		
		con = pool.getConnection();
		//현재 보고있는 글의 하위 댓글 목록 가져오기!!
		String sql="select * from comments where board_id =?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				Comments dto = new Comments();
				
				dto.setComments_id(rs.getInt("comments_id"));
				dto.setBoard_id(rs.getInt("board_id"));
				dto.setWriter(rs.getString("writer"));
				dto.setTitle(rs.getString("title"));
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
}
