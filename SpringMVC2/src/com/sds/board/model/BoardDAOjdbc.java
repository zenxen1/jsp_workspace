package com.sds.board.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.domain.Board;

public class BoardDAOjdbc implements BoardDAO{
	String TAG = this.getClass().getName();
	
	private PoolManager pool;
	public void setPool(PoolManager pool) {
		this.pool = pool;
	}

	public List selectAll() {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List<Board>list = new ArrayList<Board>();
		con= pool.getConnection();
		
		String sql = "select * from board order by board_id desc";
		
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				Board dto = new Board();
				dto.setBoard_id(rs.getInt("board_id"));
				dto.setContent(rs.getString("content"));
				dto.setHit(rs.getInt("hit"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("title"));
				
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

	
	public Board select(int board_id) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		Board dto = null;
		con= pool.getConnection();
		
		String sql = "select * from board where board_id=?";
		
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs = pstmt.executeQuery();
			
			if(rs.next()){
				dto = new Board();
				dto.setBoard_id(rs.getInt("board_id"));
				dto.setContent(rs.getString("content"));
				dto.setHit(rs.getInt("hit"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("title"));
				
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt, rs);
		}
		return dto;
	}

	
	public int insert(Board board) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result = 0;
		con= pool.getConnection();
		String sql = "insert into board(writer,title,content)";
		sql = sql + " values(?,?,?)";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, board.getWriter());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		System.out.println(TAG +"의 insert 호출" +result);
		return result;
	}

	
	public int update(Board board) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result = 0;
		con= pool.getConnection();
		String sql = "update from board(writer =?,title=?,content=?) where board_id=?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, board.getWriter());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, Integer.toString(board.getBoard_id()));
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
		System.out.println(TAG +"의 insert 호출" +result);
		return result;
	}
	

	public int delete(int board_id) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result =0;
		
		con= pool.getConnection();
		
		String sql = "delete from board where board_id=?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
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
