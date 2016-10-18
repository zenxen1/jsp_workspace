/*
 * ��� ������Ʈ�η����� �ֻ��� �ڷ����� �����Ѵ�.
 * 1.������ ������ų �� �ִ�.
 * 2.������ ������ ��Ʈ�ѷ����� �ڷ����� ���� ��ų �� �ִ�.
 * */
package com.sds.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Controller {
	//��� ������ ���� ��Ʈ�ѷ����� ��û�� ó���ϱ� ���� �޼���
	public String execute(HttpServletRequest req, HttpServletResponse resp);
	
	//������ ���θ� �����ϴ� �޼���
	public boolean isForward();
}
