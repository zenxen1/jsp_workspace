package com.fashion.common.file;

public class FileManager {
	//Ȯ���� �����ϱ�!!
	//�Ű������� ���� ��θ� �ѱ��, Ȯ���ڸ� ��ȯ���ִ� �޼���!
	
	public static String getExt(String path){
		return path.substring(path.lastIndexOf(".")+1,path.length());
 
	}
}
