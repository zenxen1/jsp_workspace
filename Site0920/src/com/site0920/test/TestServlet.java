/*
�����ζ�? ���������� �ؼ� �� ����Ǵ� Ŭ������ �ǹ��Ѵ�
*/
package com.site0920.test;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class TestServlet extends HttpServlet{
	//������ �����ֱ� ��, ���ʿ� �ν��Ͻ� ������ 
	//������ ������ �Ѱܹޱ� ���� ��������, �Ʒ��� init�� ȣ��
	//������ �ϻ� ��  �� �ѹ��� ȣ���...(�¾ ���)
	//�����ڿʹ� Ʋ����...�� ���� �� ȣ���̹Ƿ�, ȣ�� ������ �����ڸ� �����ں��ٴ� �ʴ�!!
	public void init(){
		System.out.println("�� ���� �� �¾���!!!");
	}

	//������ ������ ������ ó���Ҷ� ȣ��Ǵ� �޼���
	//��, Ŭ���̾�Ʈ�� ��û�� ���ö����� ȣ��Ǵ� �޼���...
	//service �޼���� Ŭ���̾�Ʈ�ǿ�û�� ó���ؾ� �ϹǷ�, 
	//Ŭ���̾�Ʈ�� ��û�� ������ �������� �˾ƾ��Ѵ�. ���� request��ü,response��ü�� �μ��� �޴´�...
	public void service(HttpServletRequest request, HttpServletResponse response){
		System.out.println("��û�� ó���Ҳ���");	
	}

	//������ �ν��Ͻ��� �Ҹ�ɶ�, �� �ѹ� ȣ��Ǵ� �޼���..
	//���̻� ������� ���� �ڿ����� �ݳ��Ҷ� ����
	public void destroy(){
		System.out.println("�� ���ϴ�~~");	
	}

}
