package com.sds.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sds.board.model.BoardDAO;
import com.sds.common.board.PagingManager;
import com.sds.domain.Board;

@Controller
@RequestMapping("/board/") //꿀팁 공통되는거 뺄수 있다
public class BoardController {
	//BoardDAO와 현재 컨틀로러는 결합도가 낮아야, 유지보수성이 좋아진다..따라서 boardDAO 최상위 인터페이스로 정의
	private BoardDAO boardDAO;
	private PagingManager pm;
	
	//자동맵핑 DTO와 넘겨주는 파라미터 아이디는 꼭 일치해야된다
	public void setBoardDAO(BoardDAO boardDAO) {
		this.boardDAO = boardDAO;
	}
	
	public void setPm(PagingManager pm) {
		this.pm = pm;
	}
	
	@RequestMapping("/write.do")
	public String insert(Board board){ //내부적으로 인터셉트
		boardDAO.insert(board);
		//System.out.println("insert호출");
		return "redirect:/board/list.do";
	}
	@RequestMapping("/list.do")
	public ModelAndView selectAll(HttpServletRequest request){
		List list = boardDAO.selectAll();
		request.setAttribute("list", list);
		pm.init(request);
		ModelAndView mav = new ModelAndView("board/list"); //꿀팁 view를 안써도 된다...
		mav.addObject("list", list);
		mav.addObject("pm", pm);
		
		return mav;
	}
	
	@RequestMapping("detail.do")
	public ModelAndView select(int board_id){
		System.out.println("넘겨받은 id는 "+board_id);
		Board board = boardDAO.select(board_id);
		ModelAndView mav = new ModelAndView("/board/detail");
		mav.addObject("board", board);
		return mav;
	}
	
	@RequestMapping("delete.do")
	public String delete(int board_id){
		boardDAO.delete(board_id);
		return "redirect:/board/list.do";
	}
}
