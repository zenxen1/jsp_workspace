package com.sds.controller.board;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.core.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.ModelAndViewDefiningException;

import com.sds.common.board.PagingManager;
import com.sds.model.domain.ReBoard;
import com.sds.model.service.ReBoardService;

@Controller
@RequestMapping("/board/")
public class BoardController {
	@Autowired
	private ReBoardService reBoardService; 
	
	private PagingManager pm = new PagingManager();
	
	@RequestMapping("list.do")
	
	public ModelAndView selectAll(HttpServletRequest request){
		System.out.println("controller");
		List list = reBoardService.selectAll();
		
		request.setAttribute("list", list);
		pm.init(request);
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("list",list);
		mav.addObject("pm",pm);
		mav.setViewName("board/list");
		return mav;
		
	}
		
	@RequestMapping("write.do")
	public String insert(ReBoard reBoard){
		reBoardService.insert(reBoard);
		return "redirect:/board/list.do";
	}
	
	@RequestMapping("detail.do")
	public ModelAndView select(int reBoard_id){
		ReBoard reBoard = reBoardService.select(reBoard_id);
		ModelAndView mav = new ModelAndView("board/detail");
		mav.addObject("reBoard", reBoard);
		return mav;
	}
	
	@RequestMapping("reply.do")
	public String reply(HttpServletRequest request){
		ReBoard reboard = new ReBoard();
		
		reboard.setWriter(request.getParameter("r_writer"));
		reboard.setTitle(request.getParameter("r_title"));
		reboard.setContent(request.getParameter("r_content"));
		reboard.setTeam(Integer.parseInt(request.getParameter("team")));
		reboard.setRank(Integer.parseInt(request.getParameter("rank")));
		reboard.setDepth(Integer.parseInt(request.getParameter("depth")));
		
		
		reBoardService.reply(reboard); 
		return "redirect:/board/list.do";
	}
	
	/*	private Dog dog;
	public void setDog(Dog dog) {
		this.dog = dog;
	}
	@RequestMapping("/test.do")
	public String test(){
		dog.bark();
		return null;
	}
*/
}
