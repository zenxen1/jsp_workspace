/*Ŀ�ǵ� ���� �����, ��� ��Ʈ�ѷ��� if���� ���� ���ַ��� Ŀ�ǵ� ��ü�� ��� ���� ������ ������ �ڷ�������
 * ���� �־�߸� �Ѵ�...���� �ڹٿ����� ��ü�� �ڷ����� ���� ������ �ڷ������� ���� �� �ִ� ����� �ٷ� ���
 * (extends, implements)
 * 
 * */

package com.sds.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Controller {
	public void execute(HttpServletRequest request, HttpServletResponse response);
}
