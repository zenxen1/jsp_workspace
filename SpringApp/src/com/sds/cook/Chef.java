package com.sds.cook;

//DI : 의존성을 낮추기 위한 외부 객체 주입
public class Chef {
	Pan pan;
	
	public void setPan(Pan pan) {
		this.pan = pan;
	}
	
	public void cook(){
		pan.use();
	}

}
