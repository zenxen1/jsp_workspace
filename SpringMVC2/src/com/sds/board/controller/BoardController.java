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
@RequestMapping("/board/") //���� ����Ǵ°� ���� �ִ�
public class BoardController {
	//BoardDAO�� ���� ��Ʋ�η��� ���յ��� ���ƾ�, ������������ ��������..���� boardDAO �ֻ��� �������̽��� ����
	private BoardDAO boardDAO;
	private PagingManager pm;
	
	//�ڵ����� DTO�� �Ѱ��ִ� �Ķ���� ���̵�� �� ��ġ�ؾߵȴ�
	public void setBoardDAO(BoardDAO boardDAO) {
		this.boardDAO = boardDAO;
	}
	
	public void setPm(PagingManager pm) {
		this.pm = pm;
	}
	
	@RequestMapping("/write.do")
	public String insert(Board board){ //���������� ���ͼ�Ʈ
		boardDAO.insert(board);
		//System.out.println("insertȣ��");
		return "redirect:/board/list.do";
	}
	@RequestMapping("/list.do")
	public ModelAndView selectAll(HttpServletRequest request){
		List list = boardDAO.selectAll();
		request.setAttribute("list", list);
		pm.init(request);
		ModelAndView mav = new ModelAndView("board/list"); //���� view�� �Ƚᵵ �ȴ�...
		mav.addObject("list", list);
		mav.addObject("pm", pm);
		
		return mav;
	}
	
	@RequestMapping("detail.do")
	public ModelAndView select(int board_id){
		System.out.println("�Ѱܹ��� id�� "+board_id);
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
