package com.sds.exception;

public class Test {
	public Test() {
		try {
			test();
		} catch (CorrectArrayUseException e) {
			e.printStackTrace();
			System.out.println("배열 좀 똑바로 써~~~~~");
		}
	}
	
	public void test() throws CorrectArrayUseException{
		int arr[] = new int[1];
		
		try {
			System.out.println(arr[1]);
		} catch (Exception e) {
			//개발자가 정의한 예외를 여기서 발생시킨다.
			throw new CorrectArrayUseException("배열을 잘 써야지");
			//e.printStackTrace();
		}

	}
	
	public static void main(String[] args) {
		new Test();
		
/*		int arr[] = new int[1];
		
		try {
			System.out.println(arr[1]);
		} catch (Exception e) {
			//개발자가 정의한 예외를 여기서 발생시킨다.
			throw new CorrectArrayUseException("배열을 잘 써야지");
			//e.printStackTrace();
		}
*/
	}
}
