package com.sds.model.domain;

public class ReBoard {
	private int reBoard_id;
	private String title;
	private String writer;
	private String content;
	private String regdate;
	private int hit;
	private int team;
	private int rank;
	private int depth;
	
	
	public int getTeam() {
		return team;
	}
	public void setTeam(int team) {
		this.team = team;
	}
	
	
	public int getReBoard_id() {
		return reBoard_id;
	}
	public void setReBoard_id(int reBoard_id) {
		this.reBoard_id = reBoard_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public int getHit() {
		return hit;
	}
	public void setHit(int hit) {
		this.hit = hit;
	}
	public int getRank() {
		return rank;
	}
	public void setRank(int rank) {
		this.rank = rank;
	}
	public int getDepth() {
		return depth;
	}
	public void setDepth(int depth) {
		this.depth = depth;
	}
	
	
}
