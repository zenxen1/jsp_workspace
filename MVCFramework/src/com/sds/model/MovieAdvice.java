/*
 * 웹이건 응용이건, 영화에 대한 판단을 처리하는 로직 객체....
 * 따라서 스윙,jsp에서 모두 사용 가능..
 * */

package com.sds.model;

public class MovieAdvice {

	public String getAdvice(String movie) {
		String msg = null;
		if (movie.equals("시빌워")) {
			msg = "마블의 걸작";
		} else if (movie.equals("부산행")) {
			msg = "한국판 좀비영화";
		} else if (movie.equals("럭키")) {
			msg = "유혜진 주연 코미디";
		} else if (movie.equals("인페르노")) {
			msg = "다빈치 코드 3편";
		}
		return msg;
	}
}
