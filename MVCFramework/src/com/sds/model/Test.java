/*
 * 자바의 Collection framework 의 map의 자식 객체 중 properties 객체는, 읽어들인 파일이 key-value일 경우
 * key값을 이용하여 value를 검색할 수 있는 능력이 있다..
 * 실습해 보자 
 * 이실습은 json,xml등의 데이터를 보관하는 형태라면 모두 가능하다..
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
		//하드디스크의 메모장에 대해 스트림을 생성한다.
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
