package com.sds.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/*어노테이션? 주석으로서, 일반적인 주석이 아니라 프로그램으로 사용가능한 주석 jdk5에서 등장
 * impliment가 필요없다
 * */
//@Controller
public class BoardController implements org.springframework.web.servlet.mvc.Controller{
	
	public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	
	/*
	//@RequestMapping("/board/list.do")
	public String selectAll(){
		System.out.println("selectAll 호출했어!!");
		return "";
	}
	*/
	
}
