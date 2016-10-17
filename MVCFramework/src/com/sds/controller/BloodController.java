package com.sds.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.model.BloodAdvice;

public class BloodController implements Controller {
	public void execute(HttpServletRequest request, HttpServletResponse response){
		BloodAdvice model=new BloodAdvice();
		String blood=request.getParameter("blood");
		String msg = model.getAdvice(blood);
		
		//4�ܰ� : ��� ����
		request.setAttribute("msg", msg);
		//5�ܰ� : �˸´� �� ������ �����ֱ�
		RequestDispatcher dis = request.getRequestDispatcher("/blood/result.jsp");
		try {
			dis.forward(request, response);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
