/*
 * �� Ŭ������ , ���̰� �����̰� ������� �����ͺ��̽����� ���� �۾��� �������λ��� ����Ͻ� ������ Ŭ�����̴�!
 * ���ø����̼� ���� �о߿����� �̷��� ������ ��ü�� ������ DAO(=Data Access Object)�� �Ѵ�.
 * ���� �ڹٺо��� �� �ƴϱ� ������, ms ������ ��ݰ������������� DAO��� �� ����Ѵ�.
 * 
 * DAO�� �־����� CRUD(Create(=insert) Read(=select) Update Delete)�̴�
 * */

package com.sds.model.board;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.sds.pool.PoolManager;

public class BoardDAO {
	PoolManager pool = PoolManager.getInstance();

	// �Խù� 1�� �ֱ�!!
	public int insert(String writer, String title, String content) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;

		try {
			con = pool.getConnection();

			String sql = "insert into board (board_id,writer, title, content) values (seq_board.nextval,?,?,?)";

			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, writer);
			pstmt.setString(2, title);
			pstmt.setString(3, content);

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	// �Խù� ��� ��������
	public List selectAll() {

		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<BoardDTO> list = new ArrayList<BoardDTO>();

		try {
			con = pool.getConnection();
			String sql = "select * from board order by board_id desc";

			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();

			// rs�� �� ������ �ǹǷ�, rs�� ����Ҹ��� ��ü���� �̿��غ���!!! rs��ȯ�� �����ϴ°��� ������...���������
			// �������� ���� �M��
			while (rs.next()) {
				BoardDTO dto = new BoardDTO();// �ֺ� DTO

				dto.setBoard_id(rs.getInt("board_id"));
				dto.setWriter(rs.getString("writer"));
				dto.setTitle(rs.getString("title"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setHit(rs.getInt("hit"));
				dto.setContent(rs.getString("content"));

				list.add(dto);// �÷��ǿ� �Խù� 1�� �߰�!!
			}
			;

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return list;
	}

	// �Խù� 1�� ��������
	public BoardDTO detailSelect(int board_id) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		// ArrayList<BoardDTO> list = new ArrayList<BoardDTO>();
		BoardDTO dto = null;

		try {
			con = pool.getConnection();

			// String sql = "select * from board where board_id ="+board_id;
			String sql = "select * from board where board_id =?";

			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board_id);

			rs = pstmt.executeQuery();

			if (rs.next()) {
				dto = new BoardDTO();

				dto.setBoard_id(rs.getInt("board_id"));
				dto.setWriter(rs.getString("writer"));
				dto.setTitle(rs.getString("title"));
				dto.setRegdate(rs.getString("regdate"));
				dto.setHit(rs.getInt("hit"));
				dto.setContent(rs.getString("content"));

				// list.add(dto);//�÷��ǿ� �Խù� 1�� �߰�!!
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		// return list;
		return dto;
	}

	//public int boardUpdate(String board_id, String writer, String title, String content) {
	  public int boardUpdate(BoardDTO dto){	
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;

		try {
			con = pool.getConnection();

			String sql = "Update board set writer =?, title =?, content = ? where board_id=" + dto.getBoard_id();

			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getWriter());
			pstmt.setString(2, dto.getTitle());
			pstmt.setString(3, dto.getContent());

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

	public int boardDelete(int board_id) {
		int result = 0;
		Connection con = null;
		PreparedStatement pstmt = null;

		try {
			con = pool.getConnection();

			String sql = "delete from board where board_id =" + board_id;

			pstmt = con.prepareStatement(sql);

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return result;
	}

}
