package com.sds.board.model;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionException;
import org.springframework.stereotype.Repository;

import com.sds.domain.Board;

@Repository
public class BoardDAOMybatis implements BoardDAO{
	String TAG = this.getClass().getName();
	private SessionManager manager = SessionManager.getInstance();
	
	public List selectAll() {
		SqlSession session = manager.getSession();
		List list = session.selectList("Board.selectAll");
		session.close();
		return list;
	}

	public Board select(int board_id) {
		SqlSession session = manager.getSession();
		Board board = session.selectOne("Board.selectOne",board_id);
		session.close();
		return null;
	}

	public int insert(Board board) {
		SqlSession session = manager.getSession();
		int result = session.insert("Board.insert", board);
		session.commit();
		session.close();
		return result;
	}

	public int update(Board board) {
		SqlSession session = manager.getSession();
		int result = session.insert("Board.update", board);
		session.commit();
		session.close();
		return result;
	}

	public int delete(int board_id) {
		SqlSession session = manager.getSession();
		int result = session.insert("Board.delete", board_id);
		session.commit();
		session.close();
		return result;
	}

}
