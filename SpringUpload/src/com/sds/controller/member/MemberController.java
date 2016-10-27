package com.sds.controller.member;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.sds.model.dao.MemberDAO;
import com.sds.model.domain.Asset;
import com.sds.model.domain.Member;
import com.sds.model.service.MemberService;

@Controller
@RequestMapping("/member/")
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	/*private MemberDAO memberDAO;*/
	
	//회원 등록 요청 처리!!!
	@RequestMapping("regist.do")
	public ModelAndView regist(Member member, Asset asset, HttpServletRequest request){
		//클라이언트가 업로드한 파일을 처리하자
		//System.out.println(member);
		MultipartFile myfile = member.getImg();
		String fileName = myfile.getOriginalFilename();//업로드한 파일명
		System.out.println("업로드한 파일명은"+fileName);
		
		
		ServletContext application = request.getServletContext();
		String realPath = application.getRealPath("/data/")+fileName;
		System.out.println(realPath);
		//3단계 : 서버의 하드에 저장 + DB에 insert!!
		try {
			myfile.transferTo(new File(realPath));
			member.setProfile(fileName);
			
			member.setAsset(asset);
			memberService.regist(member);
			/*memberDAO.insert(member);*/
			
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}		
		
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("member",member);
		mav.setViewName("member/result");
		return mav;
	}
}
