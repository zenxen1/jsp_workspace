package com.sds.board.model;

import java.util.List;

import com.sds.domain.Board;

public class BoardDAOMybatis implements BoardDAO{
	String TAG = this.getClass().getName();
	
	public List selectAll() {
		return null;
	}

	public Board select(int board_id) {
		return null;
	}

	public int insert(Board board) {
		System.out.println(TAG +"¿« insert »£√‚");
		return 0;
	}

	public int update(Board board) {
		return 0;
	}

	public int delete(int board_id) {
		return 0;
	}

}
