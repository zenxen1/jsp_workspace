package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Request;

import com.sds.board.domain.Board;
import com.sds.board.model.BoardDAO;
import com.sds.controller.Controller;

public class EditController implements Controller{
	BoardDAO boardDAO = new BoardDAO();
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		Board board = new Board();
		
		String board_id = req.getParameter("board_id");
		String writer = req.getParameter("writer");
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		
		board.setBoard_id(Integer.parseInt(board_id));
		board.setWriter(writer);
		board.setTitle(title);
		board.setContent(content);
		
		req.setAttribute("board", board);
		
		boardDAO.update(board);
		
		return "/board/view/edit";
	}
	public boolean isForward() {
		return true;
	}

}
