package com.sds.cook;

//DI : �������� ���߱� ���� �ܺ� ��ü ����
public class Chef {
	Pan pan;
	
	public void setPan(Pan pan) {
		this.pan = pan;
	}
	
	public void cook(){
		pan.use();
	}

}
