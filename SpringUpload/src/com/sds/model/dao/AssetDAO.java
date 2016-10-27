package com.sds.model.dao;

import java.util.List;

import com.sds.model.domain.Asset;
import com.sds.model.domain.Member;

public interface AssetDAO {
	public List selectAll();
	public Asset select(int Asset_id);
	public int insert(Asset Asset);
	public int delete(int Asset_id);
}
