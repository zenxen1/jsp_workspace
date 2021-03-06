package com.sds.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Request;

import com.sds.board.model.ReBoardDAO;
import com.sds.common.board.PagingManager;
import com.sds.controller.Controller;

public class ListController implements Controller{
	ReBoardDAO dao = new ReBoardDAO();
	PagingManager pm = new PagingManager();
	
	
	public String execute(HttpServletRequest req, HttpServletResponse resp) {
		
		List list = dao.selectAll();
		req.setAttribute("list", list);
		pm.init(req);
		req.setAttribute("pm", pm);
		
		return "/reboard/view/list";
	}
	
	public boolean isForward() {
		
		return true;
	}
}
