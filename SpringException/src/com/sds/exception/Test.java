package com.sds.exception;

public class Test {
	public Test() {
		try {
			test();
		} catch (CorrectArrayUseException e) {
			e.printStackTrace();
			System.out.println("�迭 �� �ȹٷ� ��~~~~~");
		}
	}
	
	public void test() throws CorrectArrayUseException{
		int arr[] = new int[1];
		
		try {
			System.out.println(arr[1]);
		} catch (Exception e) {
			//�����ڰ� ������ ���ܸ� ���⼭ �߻���Ų��.
			throw new CorrectArrayUseException("�迭�� �� �����");
			//e.printStackTrace();
		}

	}
	
	public static void main(String[] args) {
		new Test();
		
/*		int arr[] = new int[1];
		
		try {
			System.out.println(arr[1]);
		} catch (Exception e) {
			//�����ڰ� ������ ���ܸ� ���⼭ �߻���Ų��.
			throw new CorrectArrayUseException("�迭�� �� �����");
			//e.printStackTrace();
		}
*/
	}
}
