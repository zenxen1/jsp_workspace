/*
 * �ڹ��� Collection framework �� map�� �ڽ� ��ü �� properties ��ü��, �о���� ������ key-value�� ���
 * key���� �̿��Ͽ� value�� �˻��� �� �ִ� �ɷ��� �ִ�..
 * �ǽ��� ���� 
 * �̽ǽ��� json,xml���� �����͸� �����ϴ� ���¶�� ��� �����ϴ�..
 * 
 * */
package com.sds.model;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Test {
	FileInputStream fis;
	Properties props;
	
	public Test() {
		//�ϵ��ũ�� �޸��忡 ���� ��Ʈ���� �����Ѵ�.
		try {
			fis =new FileInputStream("C:/jsp_workspace/MVCFramework/WebContent/WEB-INF/mapping.data");
			props = new Properties();
			props.load(fis);
			
			String value = props.getProperty("/movie.do");
			System.out.println(value);
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public static void main(String[] args) {
		new Test();
	}

}
