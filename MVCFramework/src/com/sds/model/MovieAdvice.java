/*
 * ���̰� �����̰�, ��ȭ�� ���� �Ǵ��� ó���ϴ� ���� ��ü....
 * ���� ����,jsp���� ��� ��� ����..
 * */

package com.sds.model;

public class MovieAdvice {

	public String getAdvice(String movie) {
		String msg = null;
		if (movie.equals("�ú���")) {
			msg = "������ ����";
		} else if (movie.equals("�λ���")) {
			msg = "�ѱ��� ����ȭ";
		} else if (movie.equals("��Ű")) {
			msg = "������ �ֿ� �ڹ̵�";
		} else if (movie.equals("���丣��")) {
			msg = "�ٺ�ġ �ڵ� 3��";
		}
		return msg;
	}
}
