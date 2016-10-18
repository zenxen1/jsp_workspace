package com.sds.board.model;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.sds.board.domain.Board;
import com.sds.mybatis.SqlSessionManager;

public class BoardDAO {
	SqlSessionManager manager = SqlSessionManager.getInstance();
	
	public int insert(Board board){
		int result=0;
		SqlSession session = manager.getSession();
		session.insert("Board.insert",board);
		session.commit();
		session.close();
		return result;
	}
	
	public List selelctAll(){
		SqlSession session = manager.getSession();
		List list = session.selectList("Board.selectAll");
		session.close();
		return list;
	}
	
	public Board selelctOne(int board_id){
		SqlSession session = manager.getSession();
		Board board = session.selectOne("Board.selectOne",board_id);
		session.close();
		return board;
	}
	
	public int delete(int board_id){
		int result =0;
		SqlSession session = manager.getSession();
		session.delete("Board.delete", board_id);
		session.commit();
		session.close();
		return result;
	}
}
