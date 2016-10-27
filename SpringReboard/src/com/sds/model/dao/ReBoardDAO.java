package com.sds.model.dao;

import java.util.List;

import com.sds.model.domain.ReBoard;
import com.sds.model.spring.dao.ReBoardDAOJdbc;

public interface ReBoardDAO {
	public List selectAll();
	public ReBoard select(int reboard_id);
	public int insert(ReBoard reboard);
	public int delete(int reboard_id);
	public int update(ReBoard reboard);
	public int updateRank(ReBoard reboard);
}
