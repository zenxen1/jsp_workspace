package com.sds.model.spring.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.sds.model.dao.ReBoardDAO;
import com.sds.model.domain.ReBoard;

@Repository
public class ReBoardDAOJdbc implements ReBoardDAO{
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	

	@Override
	public List selectAll() {
		String sql="select * from reboard order by team desc, rank asc";
		List list=jdbcTemplate.query(sql, new RowMapper<ReBoard>(){
			public ReBoard mapRow(ResultSet rs, int row) throws SQLException {
				ReBoard reBoard = new ReBoard();
				
				reBoard.setReBoard_id(rs.getInt("reboard_id"));
				reBoard.setWriter(rs.getString("writer"));
				reBoard.setTitle(rs.getString("title"));
				reBoard.setContent(rs.getString("content"));
				reBoard.setRegdate(rs.getString("regdate"));
				reBoard.setHit(rs.getInt("hit"));
				reBoard.setTeam(rs.getInt("team"));
				reBoard.setRank(rs.getInt("rank"));
				reBoard.setDepth(rs.getInt("depth"));
				
				return reBoard;
			}
		});
		
		return list;
	}

	@Override
	public ReBoard select(int reBoard_id) {
		String sql="select * from reboard where reboard_id=?";
		
		ReBoard board=jdbcTemplate.queryForObject(sql, new RowMapper<ReBoard>() {
			public ReBoard mapRow(ResultSet rs, int row) throws SQLException {
				ReBoard ReBoard = new ReBoard(); 
				
				ReBoard.setReBoard_id(rs.getInt("reBoard_id"));
				ReBoard.setWriter(rs.getString("writer"));
				ReBoard.setTitle(rs.getString("title"));
				ReBoard.setContent(rs.getString("content"));
				ReBoard.setRegdate(rs.getString("regdate"));
				ReBoard.setHit(rs.getInt("hit"));
				ReBoard.setTeam(rs.getInt("team"));
				ReBoard.setRank(rs.getInt("rank"));
				ReBoard.setDepth(rs.getInt("depth"));
				
				return ReBoard;
			}
		} , reBoard_id);
		return board;
	}

	@Override
	public int insert(ReBoard reBoard) {
		String sql="insert into reboard(reboard_id,writer,title,content,team)";
		sql+=" values(seq_reboard.nextval,?,?,?, seq_reboard.nextval)";
		
		int result=jdbcTemplate.update(sql, new Object[]{
				reBoard.getWriter(), 
				reBoard.getTitle(),
				reBoard.getContent()
		});
		return result;
	}

	@Override
	public int delete(int reBoard_id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(ReBoard reBoard) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateRank(ReBoard reBoard) {
		String sql = "update reboard set rank=rank+1";
		sql+=" where team=? and rank > ?";
		
		int result = jdbcTemplate.update(sql, reBoard.getTeam(),reBoard.getRank());
		
		return result;
	}
	
}
