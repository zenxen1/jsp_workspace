/*
 *웹어플리케이션에서 컨트롤러를 오직 하나만 둘 경우 모든 요청을 하나의 진입점으로 몰아버리는 처리 방식은
 *올바른 방식이나..너무 많은 유형의 요청을 처리해야 하므로, 모든 요청마다 1:1 대응하는 if문 블럭이 생성된다..
 *이경우, 요청이 많아질 경우 오히려 유지보수성이 더 떨어진다.
 *해결책) IF문을 -->객체 차원으로 끌어 올리자..
 *즉 모든 요청마다 1:1 대응하는 하위 컨틀롤러를 둔다.. 이러한 개발 방법(패턴 pattern)을 Command Pattern
 *이라고 하고 GOF에 의해 명명 되었다!!
 * */

package com.sds.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.model.MovieAdvice;

//동생 컨트롤러
public class MovieController implements Controller{
	//영화에 대한 요청 처리 메서드!!
	public void execute(HttpServletRequest request, HttpServletResponse response){
		//3단계 : 영화처리 모델 객체에 일 시킨다
		MovieAdvice model = new MovieAdvice();
		String movie=request.getParameter("movie");
		String msg = model.getAdvice(movie);
		
		//4단계 : 결과 저장
		request.setAttribute("msg", msg);
		//5단계 : 알맞는 뷰 페이지 보여주기
		RequestDispatcher dis = request.getRequestDispatcher("/movie/result.jsp");
		try {
			dis.forward(request, response);
		} catch (ServletException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
