package com.sds.board.model;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.sds.domain.ReBoard;
import com.sds.mybatis.SqlSessionManager;

public class ReBoardDAO {
	SqlSessionManager manager = SqlSessionManager.getInstance();
	
	//한건 넣기 + //team 업데이트하기
	public int insert(ReBoard board){
		int result = 0;
		SqlSession session = manager.getSession();
		

		try {
			session.insert("ReBoard.insert", board);
			session.update("ReBoard.updateTeam",board);
			session.commit();
		} catch (Exception e) {
			session.rollback();
			e.printStackTrace();
		}finally{
			session.close();
		}
		return result;
		
	}
	
	//모든 레코드 가져오기
	public List selectAll(){
		SqlSession session = manager.getSession();
		List list = session.selectList("ReBoard.selectAll");
		session.close();
		
		return list;
	}
	
	//한건 가져오기
	public ReBoard selectOne(int reboard_id){
		SqlSession session = manager.getSession();
		ReBoard board = session.selectOne("ReBoard.selectOne", reboard_id);
		session.close();
		return board;
	}
	
	//수정하기
	public int update(int reboard_id){
		int result = 0;
		SqlSession session = manager.getSession();
		result = session.update("ReBoard.update", reboard_id);
		session.close();
		return result;
	}
	
	//삭제하기
	public int delete(int reboard_id){
		int result = 0;
		SqlSession session = manager.getSession();
		result = session.update("ReBoard.delete", reboard_id);
		session.close();
		return result;
	}
	
	//답변등록하기
	public int reply(ReBoard reboard){
		SqlSession session = manager.getSession();
		int result =0;
		try {
			session.update("ReBoard.updateForReply", reboard);
			session.insert("ReBoard.reply",reboard);
			session.commit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			session.rollback();
		}finally{
			session.close();
		}
		return result;
		
	}

}
