/*
 * ���̰� �����̰�, ��ȭ�� ���� �Ǵ��� ó���ϴ� ���� ��ü....
 * ���� ����,jsp���� ��� ��� ����..
 * */

package com.sds.model;

public class BloodAdvice {

	public String getAdvice(String blood) {
		String msg = null;
		if (blood.equals("A")) {
			msg = "�߻����,�ɷ��ְ�,�ְ�����!!,������!!";
		} else if (blood.equals("B")) {
			msg = "�������,�ְ��� ���,�������";
		} else if (blood.equals("O")) {
			msg = "�������¿�����";
		} else if (blood.equals("AB")) {
			msg = "�������� Ȳ��";
		}
		return msg;
	}
}
