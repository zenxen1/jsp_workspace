package com.sds.model.spring.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.sds.model.dao.AssetDAO;
import com.sds.model.domain.Asset;

@Repository
public class AssetDAOSpringJdbc implements AssetDAO{
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List selectAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Asset select(int Asset_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Asset Asset) {
		String sql = "insert into asset(asset_id, member_id,money,car)";
		sql = sql + " values(seq_asset.nextval,?,?,?)";
		int result = jdbcTemplate.update(sql,new Object[]{
			Asset.getMember_id(),Asset.getMoney(),Asset.getMoney()
		} );
		return result;
	}

	@Override
	public int delete(int Asset_id) {
		// TODO Auto-generated method stub
		return 0;
	}

}
