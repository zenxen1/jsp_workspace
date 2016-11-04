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
	
	//@RequestBody�� Ŭ���̾�Ʈ�� ������ http json �����͸� �ڹ��� ��ü�� ��ȯ���ִ� ������̼�
	
	
	@RequestMapping("/regist.do")
	@ResponseBody
	public Member regist(@RequestBody Member member){
		
		return member;
	} 
}
