package com.sds.controller.member;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.sds.model.domain.Member;

@Controller
@RequestMapping("/member/")
public class MemberController {
	
	//@RequestBody란 클라이언트가 전송한 http json 데이터를 자바의 객체로 변환해주는 어노테이션
	
	
	@RequestMapping("/regist.do")
	@ResponseBody
	public Member regist(@RequestBody Member member){
		
		return member;
	} 
}
