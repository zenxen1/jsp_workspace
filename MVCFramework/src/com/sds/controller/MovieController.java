/*
 *�����ø����̼ǿ��� ��Ʈ�ѷ��� ���� �ϳ��� �� ��� ��� ��û�� �ϳ��� ���������� ���ƹ����� ó�� �����
 *�ùٸ� ����̳�..�ʹ� ���� ������ ��û�� ó���ؾ� �ϹǷ�, ��� ��û���� 1:1 �����ϴ� if�� ���� �����ȴ�..
 *�̰��, ��û�� ������ ��� ������ ������������ �� ��������.
 *�ذ�å) IF���� -->��ü �������� ���� �ø���..
 *�� ��� ��û���� 1:1 �����ϴ� ���� ��Ʋ�ѷ��� �д�.. �̷��� ���� ���(���� pattern)�� Command Pattern
 *�̶�� �ϰ� GOF�� ���� ��� �Ǿ���!!
 * */

package com.sds.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.model.MovieAdvice;

//���� ��Ʈ�ѷ�
public class MovieController implements Controller{
	//��ȭ�� ���� ��û ó�� �޼���!!
	public void execute(HttpServletRequest request, HttpServletResponse response){
		//3�ܰ� : ��ȭó�� �� ��ü�� �� ��Ų��
		MovieAdvice model = new MovieAdvice();
		String movie=request.getParameter("movie");
		String msg = model.getAdvice(movie);
		
		//4�ܰ� : ��� ����
		request.setAttribute("msg", msg);
		//5�ܰ� : �˸´� �� ������ �����ֱ�
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
