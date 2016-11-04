/*sun사와 Spring이 많은 예외객체들을 지원해주긴 하지만, 업무별 세부적 예외는 개발자가 직접 정의해서 사용해야한다.
 * 
 * */

package com.sds.exception;

public class CorrectArrayUseException extends ArrayIndexOutOfBoundsException{
	
	public CorrectArrayUseException(String msg) {
		super(msg);
	
	}
}
