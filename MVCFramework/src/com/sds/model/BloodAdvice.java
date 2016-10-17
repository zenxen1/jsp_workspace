/*
 * 웹이건 응용이건, 영화에 대한 판단을 처리하는 로직 객체....
 * 따라서 스윙,jsp에서 모두 사용 가능..
 * */

package com.sds.model;

public class BloodAdvice {

	public String getAdvice(String blood) {
		String msg = null;
		if (blood.equals("A")) {
			msg = "잘생기고,능력있고,최고의피!!,일잘함!!";
		} else if (blood.equals("B")) {
			msg = "고집쎄고,주관이 쎄다,술도쎄다";
		} else if (blood.equals("O")) {
			msg = "쓸데없는오지랍";
		} else if (blood.equals("AB")) {
			msg = "오락가락 황제";
		}
		return msg;
	}
}
