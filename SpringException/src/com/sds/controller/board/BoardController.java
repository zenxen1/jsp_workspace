package com.sds.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sds.domain.Board;
import com.sds.exception.spring.WriteException;
import com.sds.model.board.BoardService;

@Controller
@RequestMapping("/board/")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@RequestMapping("list.do")
	public List selectAll(){
		System.out.println("selectAll ȣ��");
		return null;
	}
	
	@RequestMapping("write.do")
	public String insert(Board board){
		boardService.insert(board);
		return "redirect:///board/list.do";
	}
	
	//������ �߻��ϸ� �۵��ϴ� �޼��� ����
	@ExceptionHandler(WriteException.class)
	public ModelAndView handleException(WriteException e){
		ModelAndView mav = new ModelAndView();
		mav.addObject("e",e);
		mav.setViewName("board/error");
		return mav;
	}
	
}
