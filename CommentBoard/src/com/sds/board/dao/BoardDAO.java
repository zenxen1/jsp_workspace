package com.sds.board.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.board.domain.Board;
import com.sds.mypool.PoolManager;

public class BoardDAO {
	PoolManager pool=PoolManager.getInstance();
	
	//게시물 한건 등록
	public int insert(Board board ){
		Connection con=null;
		PreparedStatement pstmt=null;
		int result =0;
		
		con = pool.getConnection();
		String sql ="insert into board (board_id,content,title,writer) values (seq_board.nextval,?,?,?)";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, board.getContent());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getWriter());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		return result;
		
	}
	
	//모든게시물가져오기
	public List selectAll(){
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		ArrayList<Board>list = new ArrayList<>();
		
		
		con = pool.getConnection();
		String sql = "select b.BOARD_ID,b.WRITER,b.title,b.hit,b.regdate, count(c.comments_id) ";
		sql=sql + "as re from  board b left outer join comments c on c.board_id = b.BOARD_ID ";
		sql=sql + "group by b.title,b.BOARD_ID,b.WRITER,b.hit,b.regdate order by board_id desc";
		try {
			pstmt = con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Board dto = new Board();
				dto.setBoard_id(rs.getInt(("board_id")));
				dto.setRe(rs.getInt("re"));
				dto.setHit(rs.getInt("hit"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				
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
	
	public Board select(int board_id){
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		Board dto = null;
		
		
		con = pool.getConnection();
		String sql = "select * from board where board_id=?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs=pstmt.executeQuery();
			
			if(rs.next()){
				dto = new Board();
				dto.setBoard_id(rs.getInt(("board_id")));
				dto.setContent(rs.getString("content"));
				dto.setHit(rs.getInt("hit"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				
				
		
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
