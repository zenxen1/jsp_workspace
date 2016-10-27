package com.sds.controller.board;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.core.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
