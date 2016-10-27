package com.sds.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.sds.model.dao.ReBoardDAO;
import com.sds.model.domain.ReBoard;

@Service
public class ReBoardServiceImpl implements ReBoardService{
	@Autowired
	@Qualifier("reBoardDAOJdbc")
	private ReBoardDAO reBoardDAO;

	@Override
	public List selectAll() {
		// TODO Auto-generated method stub
		return reBoardDAO.selectAll();
	}

	@Override
	public ReBoard select(int reboard_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(ReBoard reboard) {
		// TODO Auto-generated method stub
		return reBoardDAO.insert(reboard);
	}

	@Override
	public int delete(int reboard_id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(ReBoard reboard) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int reply(ReBoard reboard) {
		reBoardDAO.update(reboard);
		reboard.setTeam(reboard.getTeam()+1);
		reboard.setRank(reboard.getRank()+1);
		
		reBoardDAO.insert(reboard);
		return 0;
	}

	


}
