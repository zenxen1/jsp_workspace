/*
�������� �ǵ��ʹ� �������, Ŭ���̾�Ʈ�� �������� �����Ҷ� �������� ����Ǵ�
Ŭ������ �Ƿ��� �����̶�� javaEE�� api���� �����ϴ� Ŭ������ ��ӹ޾ƾ��Ѵ�!!
��, �����̶�? �������� ����Ǵ� �ڹ��� Ŭ����

*/
package com.site0920.test;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;
	//�����ڰ� ���� Ŭ������ �������� ������ ���, �̽�������
	//�� Ŭ������ ��������������ɼ��ִ� Ŭ������ �ȴ�!!
	//���� �������� Ŭ���̾�Ʈ�� �����Ҷ�,����ȴ�...

public class  MyServlet extends HttpServlet{
	//Ŭ���̾�Ʈ�� �������� ���ٽõ���get������� ������ ���
	//�Ʒ���  �޼��尡 ����ȴ�.
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
		//�������� ���� ���ڿ��� ����غ���
		PrintWriter out=response.getWriter();
		
		out.print("<table width=\"200px\" border=\"3px\">");
		for(int i=0;i<10;i++){
			
			
			out.print("<tr>");
				out.print("<td>a</td>");
				out.print("<td>b</td>");
			out.print("</tr>");
			
			
		}
		out.print("</table>");
		
	}
}
