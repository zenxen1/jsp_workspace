/*
 * 이 객체는 로직을 처리하기 위함이 아니라, 오직, 데이터를 담기 위한 용도 이다. DTO
 * */
package com.sds.board.domain;

public class Board {
	private int board_id;
	private String writer;
	private String title;
	private String regdate;
	private int hit;
	private String content;
	private int re;
	
	public int getRe() {
		return re;
	}
	public void setRe(int re) {
		this.re = re;
	}
	public int getBoard_id() {
		return board_id;
	}
	public void setBoard_id(int board_id) {
		this.board_id = board_id;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
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
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	
	


}
