package com.sds.board.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sds.board.domain.Board;
import com.sds.comments.domain.Comments;
import com.sds.mypool.PoolManager;

public class BoardDAO {
	PoolManager pool = PoolManager.getInstance();

	// 게시물 한건 등록
	public int insert(Board board) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result = 0;

		con = pool.getConnection();
		String sql = "insert into board (board_id,content,title,writer) values (seq_board.nextval,?,?,?)";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, board.getContent());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getWriter());

			result = pstmt.executeUpdate();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;

	}

	// 모든게시물가져오기
	public List selectAll(){
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		ArrayList<Board>list = new ArrayList<>();
		
		
		con = pool.getConnection();
		//String sql = "select b.BOARD_ID,b.WRITER,b.title,b.hit,b.regdate, count(c.comments_id) ";
		//sql=sql + "as re from  board b left outer join comments c on c.board_id = b.BOARD_ID ";
		//sql=sql + "group by b.title,b.BOARD_ID,b.WRITER,b.hit,b.regdate order by board_id desc";
		StringBuffer sb = new StringBuffer();
		sb.append("select b.board_id,b.title, b.writer, b.regdate, hit,count(comments_id) as total");
		sb.append(" from board b left outer join comments c");
		sb.append(" on b.board_id= c.board_id");
		sb.append(" group by b.board_id,b.title, b.writer, b.regdate, hit");
		sb.append(" order by b.board_id desc");
				
		try {
			pstmt = con.prepareStatement(sb.toString());
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Board dto = new Board();
				dto.setBoard_id(rs.getInt(("board_id")));
				//dto.setRe(rs.getInt("re"));//dto의 경우 데이터베이스와 컬럼명이 일치해야한다.
				dto.setHit(rs.getInt("hit"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				
				//코멘트 게시물의 갯수만큼 Comments 생성하여 Board의 commentsList에 탑재!!
				//단 코멘트가 존재할때만 ....
				if(rs.getInt("total")>0){
					//ArrayList commentsList = dto.getCommentsList();
					ArrayList<Comments> commentsList = new ArrayList<Comments>();
				
					for(int i=0;i<rs.getInt("total");i++){
						Comments comments = new Comments();
						commentsList.add(comments);
						dto.setCommentsList(commentsList);
					}
					
				}
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
	
	public List selectAll(String keyword, String category){
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		ArrayList<Board>list = new ArrayList<>();
		
		
		con = pool.getConnection();
		//String sql = "select b.BOARD_ID,b.WRITER,b.title,b.hit,b.regdate, count(c.comments_id) ";
		//sql=sql + "as re from  board b left outer join comments c on c.board_id = b.BOARD_ID ";
		//sql=sql + "group by b.title,b.BOARD_ID,b.WRITER,b.hit,b.regdate order by board_id desc";
		StringBuffer sb = new StringBuffer();
		sb.append("select b.board_id,b.title, b.writer, b.regdate, hit,count(comments_id) as total");
		sb.append(" from board b left outer join comments c");
		sb.append(" on b.board_id= c.board_id");
		sb.append(" group by b.board_id,b.title, b.writer, b.regdate, hit");
		sb.append(" having b."+category+" like '%'||?||'%'");
		sb.append(" order by b.board_id desc");	
		
		try {
			pstmt = con.prepareStatement(sb.toString());
			pstmt.setString(1, keyword);
			rs=pstmt.executeQuery();
			
			while(rs.next()){
				Board dto = new Board();
				dto.setBoard_id(rs.getInt(("board_id")));
				//dto.setRe(rs.getInt("re"));//dto의 경우 데이터베이스와 컬럼명이 일치해야한다.
				dto.setHit(rs.getInt("hit"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setTitle(rs.getString("title"));
				dto.setWriter(rs.getString("writer"));
				
				//코멘트 게시물의 갯수만큼 Comments 생성하여 Board의 commentsList에 탑재!!
				//단 코멘트가 존재할때만 ....
				if(rs.getInt("total")>0){
					//ArrayList commentsList = dto.getCommentsList();
					ArrayList<Comments> commentsList = new ArrayList<Comments>();
				
					for(int i=0;i<rs.getInt("total");i++){
						Comments comments = new Comments();
						commentsList.add(comments);
						dto.setCommentsList(commentsList);
					}
					
				}
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

		con = pool.getConnection();
		String sql = "select * from board where board_id=?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);
			rs = pstmt.executeQuery();

			if (rs.next()) {
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
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return dto;

	}
	
	//조회수 증가 1 증가
	public int updateHit (int board_id){
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		
		con = pool.getConnection();
		
		String sql = "update BOARD set hit =hit+1 where board_id = "+board_id;
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
